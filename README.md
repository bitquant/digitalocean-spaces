# digitalocean-spaces
Read and write objects to DigitalOcean Spaces using fetch()

## Install
```
$ npm install digitalocean-spaces
```

## Usage
```javascript
var Spaces = require('digitalocean-spaces')
global.fetch = require('node-fetch')

var spaces = new Spaces({
    accessKey: '<private accessKey>',
    secretKey: '<private secretKey>',
    region: 'nyc3'
});

(async function() {
    try {

        let bucket = 'testbucket';
        let key = '/a/test/file.txt';
        let body = 'test file contents';

        let putResponse = await spaces.putObject({bucket, key, body})

        console.log(`put status: ${putResponse.status}`)
        console.log(`put response body: '${await putResponse.text()}'`)

        let getResponse = await spaces.getObject({bucket, key});

        console.log(`get status: ${getResponse.status}`)
        console.log(`get response body: '${await getResponse.text()}'`)

        let delResponse = await spaces.deleteObject({bucket, key});

        console.log(`del status: ${delResponse.status}`)
        console.log(`del response body: '${await delResponse.text()}'`)
    }
    catch (ex) {
        console.log(ex)
    }
}());
```

## License
MIT license; see [LICENSE](./LICENSE).
