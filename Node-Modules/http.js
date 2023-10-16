// https request using http module
const http = require('http');
const req =  http.request('http://www.google.com',(res) => {   // Callback function to handle the response
    res.on('data',(chunk)=> {
        console.log(`Data chunk: ${chunk}`);
    })
    res.on('end',() => {
        console.log('No more data')
    })
})
req.end();



 
 /* 
 //request 
 const {request} = require('http');
const req =  request('http://www.google.com',(res) => {
    res.on('data',(chunk)=> {
        console.log(`Data chunk: ${chunk}`);
    })
    res.on('end',() => {
        console.log('No more data')
    })
})
req.end();

//get
 const {get} = require('http');
get('http://www.google.com',(res) => {
    res.on('data',(chunk)=> {
        console.log(`Data chunk: ${chunk}`);
    })
    res.on('end',() => {
        console.log('No more data')
    })
})
 */
