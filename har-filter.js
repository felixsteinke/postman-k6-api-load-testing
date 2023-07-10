const fs = require('fs');
const path = require('path');
const jsonpath = require('jsonpath');

// configuration
const directoryInputPath = './1-har-exported';
const directoryOutputPath = './2-har-filtered'
const entriesFilterCondition = '$..entries[?(@._resourceType == "xhr")]';
const encoding = 'utf8';

// read the directory
fs.readdir(directoryInputPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    // read the files
    files.forEach(file => {
        if (file === '.gitkeep'){
            return;
        }
        const filePath = path.join(directoryInputPath, file);
        // read file content
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            // filter json
            try {
                const jsonData = JSON.parse(data);
                jsonData.log.entries = jsonpath.query(jsonData, entriesFilterCondition);

                // save the remaining parts of the json in a new file
                const newFilePath = path.join(directoryOutputPath, file);
                const newData = JSON.stringify(jsonData);
                fs.writeFile(newFilePath, newData, encoding, err => {
                    if (err) {
                        console.error('Error saving file:', err);
                        return;
                    }
                    console.log(`Filtered data saved to ${newFilePath}`);
                });
            } catch (err) {
                console.error('Error parsing JSON:', err);
            } // filter json
        }); // read file content
    }); // read the files
}); // read the directory
