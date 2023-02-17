const fs = require('fs');
const { component } = require('./componet_template');

const [name] = process.argv.slice(3);
if (!name)
    throw new Error('You must include a component name.');

const [newDir] = process.argv.slice(2);
if (!newDir)
    throw new Error("You must provide a directory");

const dir = `./components/${newDir}`;
console.log(dir);
console.log(name);

if (fs.existsSync(dir))
    throw new Error('A component with that name already exists.');


fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
    if (err)
        throw err;
}

fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
fs.writeFile(`${dir}/${name}.module.scss`, '', writeFileErrorHandler);