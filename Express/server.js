const express = require('express');
const path = require('path');
const friendsRouter = require('./routes/friendsRouter');
const messagesRouter = require('./routes/messagesRouter');
const app = express();

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));
const PORT = 3000;

app.use((req,res,next) =>{
    const start = Date.now();
  //  console.log(`${req.method} ${req.url}`);
    next();
    const delta = Date.now()-start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`)
});

app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json());

app.get('/',(req,res)=>{
  res.render('index',{
    title:'Document',
    caption:'Let\'s go skiing!!',
  })
})
app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter);



app.listen(PORT,() => {
    console.log(`Listening on ${PORT}...`)
});