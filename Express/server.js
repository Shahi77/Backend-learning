const express = require('express');
const friendsRouter = require('./routes/friendsRouter');
const messagesRouter = require('./routes/messagesRouter');
const app = express();

const PORT = 3000;

app.use((req,res,next) =>{
    const start = Date.now();
  //  console.log(`${req.method} ${req.url}`);
    next();
    const delta = Date.now()-start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`)
});
app.use(express.json());


app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter);



app.listen(PORT,() => {
    console.log(`Listening on ${PORT}...`)
});