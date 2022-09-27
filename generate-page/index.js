const fs = require('fs');
const { page } = require('./page_template');

let name, directory;

if (process.argv.length < 3)
    throw new Error('You must specify at least a page name');
if (process.argv.length > 2)
    name = process.argv[2];
if (process.argv.length > 3)
    directory = process.argv[3];

if (!name)
    throw new Error('You must include a page name.');

const dir = `./pages${directory ? directory : ''}/${name}`.toLowerCase();

if (fs.existsSync(dir))
    throw new Error('A page with that name already exists.');

fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
    if (err)
        throw err;
}

fs.writeFile(`${dir}/index.tsx`, page(name), writeFileErrorHandler);
fs.writeFile(`${dir}/${name}.module.scss`, '', writeFileErrorHandler);


//export { default as Header } from "./Header/Header";
// fs.appendFile(`./components/index.ts`, `\nexport {default as ${name}} from "./${name}/${name}";`, writeFileErrorHandler);