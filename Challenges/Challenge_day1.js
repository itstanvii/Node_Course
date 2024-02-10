/*Problem Statement: Create a function readFileContent(filePath) that takes
the path to a file as input and reads its content asynchronously using the fs module. 
The function should print the content to the console.*/
const fs = require('fs').promises;

async function readFileContent(filePath) {
    try{
        const fileContent = await fs.readFile(filePath);
        console.log(fileContent.toString());
    }
    catch(error){
        console.error('Error reading file:${error.message}');
    }
}
readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)

readFileContent('test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...
  

