const fs = require('fs');
// TODO const {execSync} = require('child_process');

// configuration
const inputDir = './3-postman-collections';
const outputDir = './4-k6-scripts';
const collectionPostfix = '.postman_collection.json';
const scriptPostfix = '-k6-script.js';

// read the directory
fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    // read the files
    files.forEach(file => {
        if (file === '.gitkeep') {
            return;
        }
        const collectionFilePath = `${inputDir}/${file}`;
        const scriptFilePath = `${outputDir}/${file.replaceAll(collectionPostfix, scriptPostfix)}`;

        // execute the commands
        const command = `postman-to-k6 ${collectionFilePath} -o ${scriptFilePath}`;
        console.log(`Executing command: ${command}`);

        // TODO execSync(command);

    }); // read the files
}); // read the directory
