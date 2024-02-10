const {exec} =require('child_process')
function executeCommand(command) {
    exec(command, (error,stdout,stderr) => {
        if(error){
            console.error(`exec error : ${error.message}`);
            return;
        }
        console.log(`Command output:\n${stdout}`);
    });
}
executeCommand('ls');
executeCommand('echo "Hello, Node.js!"');
