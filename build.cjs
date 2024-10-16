const glob = require("glob-fs")({ gitignore: true });
const fs = require("fs");
const path = require("path");

// eslint-disable-next-line no-undef
const buildPath = path.resolve(__dirname, "build/client");
const indexFile = path.resolve(buildPath, "index.html");

const files = glob.readdirSync(
  // eslint-disable-next-line no-undef
  "app/routes/__with-nav.*.tsx"
);

files
  .map((file) => file.split(".")[1])
  .forEach((file) => {
    fs.copyFileSync(indexFile, `${path.resolve(buildPath, file)}.html`);
  });
