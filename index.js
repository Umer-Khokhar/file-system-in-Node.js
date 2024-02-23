// Callback Hell file system 
// const fs = require('fs');

// fs.readFile('files/name.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// fs.writeFile('files/goals.txt', 'I want to become a web developer', (err) => {
//     if (err) throw err;
//     console.log('Goals file written successfully');

//     fs.appendFile('files/goals.txt', '\n\n And also want to learn Node.js', (err) => {
//     if (err) throw err;
//     console.log("File append successfully")

//       fs.rename('files/goals.txt', 'files/newGoals.txt', (err) => {
//         if (err) throw err;
//         console.log('Rename file successfully')
//       })
//   })
//   fs.readFile('./files/newGoals.txt', 'utf8', (err, data) => {
//       if (err) throw err;
//       console.log(data);
//   })
// })


// async await file system

const fsPromise = require('fs').promises;
const path = require('path');

const filesOp = async () => {
    try {
        // read Data from file
      let readData = await fsPromise.readFile(path.join(__dirname, 'files', 'name.txt'), 'utf8');
      // Write Data
      await fsPromise.writeFile(path.join(__dirname, 'files', 'goals.txt'), 'I want to become a web developer');
      // Append Data in Goals
      await fsPromise.appendFile(path.join(__dirname, 'files', 'goals.txt'), '\n\n And also want to learn Node.js');
      // Renaming Goals file
      await fsPromise.rename(path.join(__dirname, 'files', 'goals.txt'), path.join(__dirname, 'files', 'newGoals.txt'));
    //   reading the newGoals file data
      let newData = await fsPromise.readFile('files/newGoals.txt', 'utf8');
      console.log(newData);
      console.log(readData);
    } catch (err) {
        console.error(err)
    }
}

filesOp()

