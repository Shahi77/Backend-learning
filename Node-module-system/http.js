const internals = require('./internals');
//const {send,read} = require('./internals'); //destructuring sentence

//const {send} = require('./internals/request'); // import {send} from '.\/reuest';[]
//const {read} = require('./internals/response'); //read = response  

function makeRequest(url,data){
internals.send(url,data);
return internals.read();
}
const responseData = makeRequest('https://google.com','hello');
console.log(responseData);