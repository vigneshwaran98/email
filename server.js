
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'dist/EmailSuppression')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/EmailSuppression', 'index.html'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/EmailSuppression', 'index.html'));
});

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
app.listen(port, ip, function () {
  console.log( "Listening on http://" + ip + ":" + port )
});

module.exports = app ;
