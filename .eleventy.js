const axios = require("axios");
const { setupCache } = require("axios-cache-adapter");
const { join } = require("path");
const { readJSON } = require("fs-extra");
const cache = setupCache({
  maxAge: 86400
});
const api = axios.create({
  adapter: cache.adapter
});

const trim = (s, mask) => {
  while (~mask.indexOf(s[0]))
    s = s.slice(1);
  while (~mask.indexOf(s[s.length - 1]))
    s = s.slice(0, -1);
  return s;
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addNunjucksFilter("titleify", value =>
    (value || "")
      .replace(/-/g, " ")
      .replace(/\//g, " ")
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ")
      .replace(/ The/g, " the")
      .replace(/ Of/g, " of")
  );
  eleventyConfig.addNunjucksFilter("classify", value =>
    (value || "")
      .replace("./content/", "")
      .replace(/\//g, " ")
      .replace(".md", "")
  );
  eleventyConfig.addNunjucksFilter(
    "iconify",
    value =>
      `<span class="url-icon" style="background-image: url('https://logo.clearbit.com/${
        value
          .replace(/https?:\/\//, "")
          .replace("www.", "")
          .split("/")[0]
      }')"></span>`
  );
  eleventyConfig.addNunjucksFilter(
    "datetime",
    value =>
      `<time datetime="${new Date(value).toISOString()}">${new Date(
        value
      ).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
      })}</time>`
  );
  eleventyConfig.addNunjucksAsyncShortcode(
    "wiki",
    async value => {
      try {
        return `<p>${(await api.get(`https://services.anandchowdhary.now.sh/api/wikipedia-summary?q=${encodeURIComponent(value)}`)).data} <a href="#">Wikipedia</a></p>`;
      } catch (error) {}
      return "";
    }
  );
  var allItems;
  eleventyConfig.addCollection("allMyContent", function(collection) {
    allItems = collection.getAll();
    return allItems;
  });
  eleventyConfig.addNunjucksAsyncShortcode(
    "workTagsArchive",
    async value => {
      let result = `<div class="container-large small-p">
      <h1>${value}</h1>
      <nav class="filter-nav">
        <a href="/projects/">All</a>
        <a${value === "Web" ? ` class="active"` : ""} href="/projects/web">Web</a>
        <a${value === "App" ? ` class="active"` : ""} href="/projects/app">Apps</a>
        <a${value === "Branding" ? ` class="active"` : ""} href="/projects/branding">Branding</a>
        <a${value === "AI" ? ` class="active"` : ""} href="/projects/ai">AI/ML</a>
        <a${value === "IoT" ? ` class="active"` : ""} href="/projects/iot">IoT</a>
        <a${value === "VR/AR" ? ` class="active"` : ""} href="/projects/vrar">VR/AR</a>
        <a${value === "Oswald Labs" ? ` class="active"` : ""} href="/projects/oswald-labs/">Oswald Labs</a>
        <a${value === "Open source" ? ` class="active"` : ""} href="/projects/open-source/">Open source</a>
        <a${value === "Hackathon" ? ` class="active"` : ""} href="/projects/hackathon">Hackathons</a>
      </nav>
      <section class="projects">
        <div>
      `;
      const items = allItems.filter(item => (item.data.work || []).includes(value));
      items.forEach(project => {
        result += `<article class="project-item">
          <a href="${project.url}">
            <div aria-hidden="true" class="project-image project-image-${project.data.style}" style="background-color: ${project.data.bg}">
              <div
                class="project-image-front"
                style="background-image: url('${project.data.img_src}.${project.data.img_type}')"
              ></div>
            </div>
            <div>
              ${project.data.icon ? `
              <div class="project-item-icon${project.data.icon_bg ? " project-item-icon-box" : ""}">
                <img alt="" src="${project.data.icon}">
              </div>
              ` : ""}
              <h2>${project.data.title}</h2>
              <time>${ project.data.date.toLocaleDateString("en-US", {
                month: "long",
                year : "numeric"
              }) }</time>
            </div>
            <p>${project.data.intro}</p>
            <div class="project-tags">
              ${project.data.work ? `
                ${project.data.work.map(tag => `<span>${tag}</span>`).join("")}
              ` : ""}
              ${project.data.stack ? `
                ${project.data.stack.map(tag => `<span class="stack">${tag}</span>`).join("")}
              ` : ""}
              ${project.data.tools ? `
                ${project.data.tools.map(tag => `<span class="tools">${tag}</span>`).join("")}
              ` : ""}
            </div>
          </a>
        </article>`;
      });
      return `${result}</div></section></div>`;
    });
  eleventyConfig.addNunjucksAsyncShortcode(
    "blogTagArchive",
    async value => {
      const items = allItems.filter(item => (item.data.tags || []).includes(value));
      try {
        let result = `<div class="blog-title">
        <div class="l"></div>
        <div class="r">
          <h1>Blog</h1>
          <nav class="filter-nav">
            <a href="/blog/">All</a>
            <a${value === "coffee-time" ? ` class="active"` : ""} href="/blog/coffee-time/">Coffee Time</a>
            <a${value.includes("state-of-the") ? ` class="active"` : ""} href="/blog/state-of-the/">State of the X</a>
            <a${value === "code" ? ` class="active"` : ""} href="/blog/code/">Code</a>
            <a${value === "design" ? ` class="active"` : ""} href="/blog/design/">Design</a>
          </nav>
        </div>
      </div><section class="blog-posts">`;
        items.forEach(item => {
          result += `<article>
            <div class="l">
              ${item.data.alias ?
                `<h2><a href="${item.data.alias}">${item.data.title}</a></h2>` :
                `<h2><a href="${item.url}">${item.data.title}</a></h2>`
              }
              <div>Posted on <time>${item.data.date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year : "numeric"
              })}</time></div>
              ${item.data.tags.filter(i => i !== "blog").map(tag => `
                <a class="tag" href="/blog/${tag}">${tag}</a>
              `).join("")}
            </div>
            <div class="r">
              ${extractExcerpt(item)}
              ${item.data.alias ?
                `<p><a href="${item.data.alias}">Continue reading on ${item.data.publisher}</a></p>` :
                `<p><a href="${item.url}">Continue reading &rarr;</a></p>`
              }
            </div>
          </article>`;
        });
        return `${result}</section>`;
      } catch (error) {}
      return "";
    }
  );
  eleventyConfig.addNunjucksAsyncShortcode(
    "highlights",
    async () => {
      try {
        const file = await readJSON(join(__dirname, "content", "_data", "highlights.json"));
        let result = "";
        Object.keys(file).forEach(key => {
          console.log(key);
            const item = file[key];
          const slug = trim(item.meta.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, ""), "-");
          result += `<article>
          <a href="/travel/${slug}">
            <picture>
              <img src="/images/highlights/${slug}/cover.jpg" alt="" loading="lazy">
            </picture>
            <div>
              <div>${item.meta.title}</div>
              <div><time datetime="${item.data[0].date}">${new Date(item.data[0].date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric"
              })}</time></div>
            </div>
          </a>
        </article>`;
        });
        return result;
      } catch (error) {}
      return "";
    }
  );
  eleventyConfig.addShortcode("excerpt", post => extractExcerpt(post));
  eleventyConfig.addNunjucksFilter("place", value => {
    switch (value) {
      case "sf-bay-area":
        return "🇺🇸 San Francisco Bay Area";
      case "new-delhi":
        return "🇮🇳 New Delhi";
      case "eindhoven":
        return "🇳🇱 Eindhoven";
      case "bangalore":
        return "🇮🇳 Bangalore";
      case "kanpur":
        return "🇮🇳 Kanpur";
      case "enschede":
        return "🇳🇱 Enschede";
      case "kuala-lumpur":
        return "🇲🇾 Kuala Lumpur";
      case "gurugram":
        return "🇮🇳 Gurugram";
      case "heerlen":
        return "🇳🇱 Heerlen";
      case "london":
        return "🇬🇧 London";
      case "paris":
        return "🇫🇷 Paris";
      default:
        return value;
    }
  });
  return {
    dir: {
      input: "content",
      output: "public",
      includes: "../includes"
    }
  };
};

/**
 * Extracts the excerpt from a document.
 *
 * @param {*} doc A real big object full of all sorts of information about a document.
 * @returns {String} the excerpt.
 * @source https://github.com/11ty/eleventy/issues/410#issuecomment-462821193
 */
function extractExcerpt(doc) {
  if (!doc.hasOwnProperty("templateContent")) {
    console.warn(
      "❌ Failed to extract excerpt: Document has no property `templateContent`."
    );
    return;
  }
  const excerptSeparator = "<!--more-->";
  const content = doc.templateContent;
  if (content.includes(excerptSeparator)) {
    return content.substring(0, content.indexOf(excerptSeparator)).trim();
  }
  const pCloseTag = "</p>";
  if (content.includes(pCloseTag)) {
    return content.substring(0, content.indexOf(pCloseTag) + pCloseTag.length);
  }
  return content;
}
