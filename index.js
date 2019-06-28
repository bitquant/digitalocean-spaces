var S3 = require('amazon-s3');

function Spaces(config) {
    config.domain = 'digitaloceanspaces.com'
    S3.call(this, config)
}

Spaces.prototype = Object.create(S3.prototype);
Spaces.prototype.constructor = Spaces;

module.exports = Spaces
