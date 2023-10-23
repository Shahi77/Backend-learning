const express = require('express');
const messagesController = require('./Controllers/messagesController')
const friendsController = require('./Controllers/friendsController')
const app = express();

const PORT = 3000;

app.use((req,res,next) =>{
    const start = Date.now();
  //  console.log(`${req.method} ${req.url}`);
    next();
    const delta = Date.now()-start;
    console.log(`${req.method} ${req.url} ${delta}ms`)
});
app.use(express.json());

app.post('/friends',friendsController.postFriend);
//app.get('/friends',friendsController.getFriend);
app.get('/friends', friendsController.getFriend);


app.get('/friends/:friendId',friendsController.getFriends);

app.get('/messages',messagesController.getMessages);

app.post('/messages',messagesController.postMessage);


app.listen(PORT,() => {
    console.log(`Listening on ${PORT}...`)
});