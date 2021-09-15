const fs = require('fs')

// // **************************************
// // Reading and Writing Files Sync & Async
// // **************************************

// // BLOCKING SYNCHRONOUSLY
// const text = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(text)

// const textOut = `This is what we know about avocados: ${text}. \nCreated on ${Date.now()}`

// fs.writeFileSync('./txt/output.txt', textOut)
// console.log("File Written!");

// // NON-BLOCKING ASYNCHRONOUSLY - BUT "CALLBACK HELL"
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       fs.writeFile('./txt/conjoined.txt', `${data2}\n${data3}`, (err) => {
//         if (err) throw err;
//         console.log('CALL BACK HELL COMPLETE!');
//       })
//     });
//   });
// });
// console.log('Waiting...');

// // GOODBYE HELL!
// const fCallBackHell = async function () {
//   const data1 = fs.readFileSync('./txt/start.txt', 'utf-8')
//   const data2 = fs.readFileSync(`./txt/${data1}.txt`, 'utf-8')
//   const data3 = fs.readFileSync('./txt/append.txt', 'utf-8')

//   fs.writeFile('./txt/conjoined.txt', `${data2}\n${data3}`, (err) => {
//     if (err) throw err;
//     console.log('CALL BACK HELL COMPLETE!');
//   })
// }
// console.log('Waiting...');
// fuckCallBackHell();


