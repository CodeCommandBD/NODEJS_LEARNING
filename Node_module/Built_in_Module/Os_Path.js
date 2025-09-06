const os = require('os');
const path = require('path')

// TODO: ################## OS ###############
// TODO: ################## OS ###############

console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.totalmem());


// TODO: ############# PATH ############
// TODO: ############# PATH ############

const extension = path.extname('text.html') //TODO: .html or .txt extension find
console.log(extension);

const join = path.join(__dirname + '/news') //TODO: path join 
console.log(join);
