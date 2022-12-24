const express = require('express');
const formidable = require('formidable')
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.sendfile(__dirname+ '/index.html');
});

app.post('/',(req,res) => {
  var form = new formidable.IncomingForm()
  form.parse(req)
  form.on('fileBegin', function (name, file){
    file.path = __dirname + '/uploads/' + file.name;
  })
form.on('file',function(name,file){
  console.log("Uploaded file"+ file.name);
})

  res.send('Files Uploaded')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
