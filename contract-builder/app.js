const factory = require('./factory')
var util = require('util')
var fs = require('fs');

let inst = util.inspect(factory.instance)
let jsonInst = JSON.parse(inst);

fs.writeFile("aadhar.json", jsonInst, function(err) {
    if (err) {
        console.log(err);
    }
});