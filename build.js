const nunjucks = require("nunjucks");
const fs = require("fs");
const path = require("path");

// Configure nunjucks
nunjucks.configure("src/templates", {
  autoescape: false
});

// Pages to generate
const pages = ["index", "about", "contact"];

// Ensure dist folder exists
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

// Render each page
pages.forEach((page) => {
  const html = nunjucks.render(`${page}.njk`);
  fs.writeFileSync(path.join("dist", `${page}.html`), html);
  console.log(`Generated: dist/${page}.html`);
});
