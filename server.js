const express = require('express');
const app = express();

const nasaclient = require('./client/nasaclient');


app.get('/nasa', async (req,resp) => {
  console.log("call /nasa");
  nasaclient.callNasa( (err, body) => {
    console.log("error" + err);
    console.log("body" + body);
      if (err) {

         console.error(err);
         resp.send(400, err);
         return;
      }
      resp.send(200, body);

  });


});

app.listen(3000);

/*
app.listen(3000, () =>{
  console.log('Listen on port 3000');
});
*/
module.exports = app;
