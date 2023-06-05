const fs = require('fs');
const path = require('path');

// Get the directory name from the first command-line argument
const directory = process.argv[2];

// Get the file extension to filter by from the second command-line argument
const extension = process.argv[3];

// Read the contents of the directory asynchronously
fs.readdir(directory, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // Filter the files by the provided extension
  const filteredFiles = files.filter(file => {
    // Get the file extension of each file
    const fileExtension = path.extname(file).slice(1);
    // Compare the file extension with the provided extension
    return fileExtension === extension;
  });

  // Print the filtered files to the console
  filteredFiles.forEach(file => {
    console.log(file);
  });
});
