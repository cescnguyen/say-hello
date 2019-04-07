var chalk = require("chalk")


function Hello(name) {
    this.name = name;
}


Hello.prototype.sayHello = function () {
    console.log('hello ', chalk.green(this.name))
}


module.exports = Hello;