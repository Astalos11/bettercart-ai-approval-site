const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const readmePath = path.join(root, "README.md");
const readme = fs.readFileSync(readmePath, "utf8");

const docRefs = [...readme.matchAll(/`(docs\/[^`]+)`/g)]
  .map((match) => match[1])
  .filter((docPath) => !docPath.includes("*"));
const missing = docRefs.filter((docPath) => !fs.existsSync(path.join(root, docPath)));

console.log(`readme_doc_refs=${docRefs.length}`);
console.log(`missing_readme_docs=${missing.length}`);

if (missing.length) {
  console.log(`Missing README docs:\n${missing.join("\n")}`);
  process.exit(1);
}
