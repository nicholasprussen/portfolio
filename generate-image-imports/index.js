const fs = require('fs');

const dir = `./public/images/photography`;
const imageImportFile = `./components/images.ts`;

var files = fs.readdirSync(dir);

if (!files)
    throw new Error(`No Images Present in '${dir}'`);

if (!Array.isArray(files))
    throw new Error(`Could not parse images in '${dir}'`);

let pureFileNames = [];

let imageImports = files.map((file) => {
    const fileMinusExtension = file.split('.');
    if (fileMinusExtension.length < 1 || fileMinusExtension.length > 2)
        return ``;
    const fileName = fileMinusExtension[0];
    pureFileNames.push(fileName);
    return `const ${fileName} = '${dir.slice(8)}/${file}'\n`;
});

imageImports.push(`export let portfolioImages = [ ${pureFileNames.join(", ")} ];`);

const finalImports = imageImports.join("");

fs.writeFileSync(
    imageImportFile,
    finalImports,
    (err) => {if (err) { throw err }}
);