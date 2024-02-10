//files

const fs = require('fs')

//reading a file

let fileContent = fs.readFileSync('file1.txt')
console.log('data of file 1->' + fileContent)

//writing in a file
fs.writeFileSync('file2.txt','This is tanvi') //previous data will get deleted... it will overwrite on pervious data
console.log('File has been wriiten')
//if a file doesn't exist, this method will create a new file & write data 

//append a file : adds new data to a previously written data
fs.appendFileSync('file3.txt',' This is updated data')
console.log('File has been updated')

//deleting a file

fs.unlinkSync('file2.txt')
console.log('File has been deleted')


// Directories

//create a dir
fs.mkdirSync('myDir')

//check the content inside of a directory
let folderPath ='C:\\Users\\Dell\\Node.js\\Modules\\myDir'

let folderContent =fs.readdirSync(folderPath)
console.log("Folder Conetent: " , folderContent)

// to check whether a directory exist or not
let doesExist =fs.existsSync('myDirec') //it works with file as well
console.log(doesExist)

//how to del a directory
fs.rmdirSync('myDir')
console.log('Folder has been deleted')