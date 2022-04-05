var module = require('./module_hash_sha');

module.sha512();
module.sha256();
module.sha1();
module.md5();
console.log('Completed');









// var http = require('http');
// var dt = require('./module_hash_sha');

// http.createServer(function (req, res) {
//     var crypto = require('crypto');
//     var hash = crypto.createHash('sha512');
//     var hash = crypto.createHash('sha256');
//     var hash = crypto.createHash('sha1');
//     data = hash.update('test', 'utf8');
//     gen_hash = data.digest('hex');
//     console.log('hash: ' + gen_hash);

//     console.log("Completed!")
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(gen_hash + dt.myDateTime());
// }).listen(8080); 
