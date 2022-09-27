const fs = require('fs');
const { component } = require('./componet_template');

const [name] = process.argv.slice(2);
if (!name)
    throw new Error('You must include a component name.');

const dir = `./components/${name}`;

if (fs.existsSync(dir))
    throw new Error('A component with that name already exists.');

fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
    if (err)
        throw err;
}

fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
fs.writeFile(`${dir}/${name}.module.scss`, '', writeFileErrorHandler);


//export { default as Header } from "./Header/Header";
fs.appendFile(`./components/index.ts`, `\nexport {default as ${name}} from "./${name}/${name}";`, writeFileErrorHandler);