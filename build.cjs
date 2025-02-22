const glob = require("glob-fs")({ gitignore: true });
const fs = require("fs");
const path = require("path");

// eslint-disable-next-line no-undef
const buildPath = path.resolve(__dirname, "build/client");
const indexFile = path.resolve(buildPath, "index.html");

const files = glob.readdirSync(
  // eslint-disable-next-line no-undef
  "app/routes/*.tsx"
);

const routes = files
  .filter(
    (file) =>
      !file
        .split(".")
        .slice(0, -1)
        .every((x) => x.indexOf("_") > -1 || x.indexOf("$") > -1)
  )
  .map((file) => {
    let parts = file.split(".");
    return path.basename(parts[parts.length - 2]);
  });

routes.forEach((file) => {
  fs.copyFileSync(indexFile, `${path.resolve(buildPath, file)}.html`);
});

// 404 page
fs.copyFileSync(indexFile, `${path.resolve(buildPath, "404")}.html`);

const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
<url>
    <loc>
        https://www.serotonin.co
    </loc>
</url>
${routes
  .map(
    (route) =>
      `<url>
    <loc>
        https://www.serotonin.co/${route}
    </loc>
</url>`
  )
  .join("\n")}
</urlset>
`.trim();

fs.writeFileSync(path.resolve(buildPath, "sitemap.xml"), sitemap);
