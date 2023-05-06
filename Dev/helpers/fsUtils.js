const fs = require('fs');
const utils = require('utils');
const readFromFile = util.promisify(fs.readFile);

@params {string} destination
@params {object} content
@return {void}

const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        rr ? console.error(err) : console.info(`\nData written to ${destination}`)
    );

@params {object} content
@params {string} file
@return {void}

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend };