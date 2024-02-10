const path = require('path');
function resolvePath(relativePath) {
 const absolutePath =path.resolve(__dirname, relativePath);

 console.log('Resolved Path:',absolutePath);
}
resolvePath('file1.txt');
resolvePath('output1.txt')
