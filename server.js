const express = require('express');
const app = express();
const request = require('request');

app.get('/nasa', (req,resp) => {

  request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY2', (err,res,body) => {

    if (err) { return console.error(err); }
    resp.send(body);

  });


});

app.listen(3000, () =>{
  console.log('Listen on port 3000');
});
