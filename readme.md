# Sync/Async With Node JS

Node js use call back
[https://www.geeksforgeeks.org/node-js-callback-concept/](https://www.geeksforgeeks.org/node-js-callback-concept/)

## Example sync :

cf sync.js


## Example async :

- deux modes d’écriture :

> fs.readFile(pathFile, function(err,data) {
>    code du callback
});

cf async.js

> fs.readFile(pathFile, (err,data) => {
>   code du call back
> });

cf async0.js

## Example external service call

> use of request.

cf server.js
