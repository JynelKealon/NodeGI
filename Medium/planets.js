// Read the contents of the file asynchronously
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  
    // Split the data into an array of lines
    const planets = data.split('\n');
  
    // Print each planet to the console
    planets.forEach(planet => {
      console.log(planet);
    });
  });