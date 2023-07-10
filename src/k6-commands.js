const fs = require('fs');
const path = require("path");

const scriptDirectory = './4-k6-scripts';

// read the directory
fs.readdir(scriptDirectory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    // read the files
    files.forEach(file => {
        if (file === '.gitkeep' || file === 'libs') {
            return;
        }
        const scriptPath = path.join(scriptDirectory, file);
        // print commands
        console.log(`k6 run ${scriptPath}`);
    });
    // print options
    if (files.length > 0) {
        console.log("Options: --vus=2")
    }
}); // read the directory
