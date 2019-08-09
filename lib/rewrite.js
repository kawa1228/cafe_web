const fs = require('fs');
const path = require('path')
const filePath = './dist/index.html'
const dirname = path.dirname(filePath);

fs.access(dirname, fs.constants.R_OK | fs.constants.W_OK, (err) => {
  if (err) {
    console.log('access error', err)
    if (error.code === "ENOENT") {
      fs.mkdirSync(dirname);
    } else {
      return;
    }
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log('read error', err)
      throw err
    } else {
      const pattern = /font-family:#dc143c\sPro,/g
      const replaceData = data.replace(pattern, 'font-family:Crimson Pro,')
      fs.writeFile(filePath, replaceData, "utf8", (err) => {
        if (err) {
          console.log('write error')
          throw err
        }
      });
    }
  })
});

console.log('rewrite file')
