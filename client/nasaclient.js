const request = require('request');


function callNasa(cb) {

  request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY2', (err,res,body) => {
    console.log('passe dans le call callNasa');
    if (err) { return cb(err); }
    return cb(null,body);

  });

}

module.exports = { callNasa };
