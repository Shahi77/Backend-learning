const path = require('path');

function getMessages(req,res){
  // const filePath = path.join(__dirname,'..','public','Images','016 skimountain.jpg');
 //   res.sendFile(filePath);

 res.render("messages",{
    title:"Messages to my friends!",
    friend:"Elon Musk",
 })
 //   res.send('<ul><li>Hello Albert!</li></ul>')
 
}
function postMessage(req,res){
    console.log('Updating messages...')
}

module.exports={
    getMessages,
    postMessage,
}