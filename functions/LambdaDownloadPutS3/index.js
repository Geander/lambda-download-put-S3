var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var http = require('http');

exports.handle = function(event, context, callback) {

  var bucketName = event.bucketName;
  var urlImage = event.urlImage;

  if(bucketName && urlImage){

    http.get(urlImage, function(res){
      var imageData = '';

      res.setEncoding('binary');

      res.on('data', function(chunk){
        imageData += chunk;
      });

      res.on('end', function(){

        var params = {
          Bucket: bucketName,
          Key: 'new_img_name.png',
          Body: new Buffer(imageData, 'binary'),
          ACL: 'public-read'
        };

        s3.putObject(params, function(err, data) {
          if (err) {
            callback('error:' + err);
          } else {
            callback(null, data);
          }

        });

      });

    });

  } else {
    callback('paramteres error');
  }

};
