/* 1-way
module.exports = {
    request: require('./request'),
    request: require('./response'),
} */


/* 2nd way
const request = require('./request');
const request = require('./response');
module.exports = {
    REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
    send: request.send,
    read: Response.read,
} */

//3rd way using spread operator
module.exports = {
    ...require('./request'),
    ...require('./response'),
}