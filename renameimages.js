const fs = require('fs');

const dir = './public/images/photography';

const files = fs.readdirSync(dir);

files.forEach((file) => {
    const splitFileName = file.split("-");
    const joinedFileName = splitFileName.join("");
    fs.rename(`${dir}/${file}`, `${dir}/${joinedFileName}`, (err) => {if (err) { throw err }});
})