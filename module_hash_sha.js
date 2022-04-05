var crypto = require('crypto');
exports.sha512 = function()
{
    var hash = crypto.createHash('sha512');
    exports.print(hash);
};

exports.sha256 = function()
{
    var hash = crypto.createHash('sha256');
    exports.print(hash);
};

exports.sha1 = function()
{
    var hash = crypto.createHash('sha1');
    exports.print(hash);
};

exports.md5 = function()
{
    var hash = crypto.createHash('md5');
    exports.print(hash);
};

exports.print = function(x)
{
    data = x.update('test', 'utf8');
    hased = data.digest('hex');
    console.log(hased);
};