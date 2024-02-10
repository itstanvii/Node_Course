/* Child process is a node module used to create sub process within a script 
you can perform different tasks with your script by just using some methods
*/

const cp = require('child_process')
// cp.execSync('calc')
// cp.execSync('start chrome https://github.com/shivscaler/Nodejs-30-Days-Challenge-Scaler-Topics/blob/main/Question3.md')
console.log('output '+ cp.execSync('node demo.js'))
