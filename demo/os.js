const os = require('os')

console.log('Operation System: ', os.platform());

console.log('Architecture processor: ', os.arch());

console.log('Info about processor: ', os.cpus());

console.log('Free memory: ', os.freemem());

console.log('Total memory: ', os.totalmem());

console.log('Home directory: ', os.homedir());

console.log('System work time: ', os.uptime()/3600);
