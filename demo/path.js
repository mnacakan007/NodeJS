const path = require('path')

console.log('File name: ', path.basename(__filename))
console.log('File name: ', path.dirname(__filename))
console.log('File name: ', path.extname(__filename))
console.log('File name: ', path.parse(__filename).dir)
console.log(path.join(__dirname, 'server', 'index.html'));

