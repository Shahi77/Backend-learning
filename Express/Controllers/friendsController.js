const model = require('../models/friendModel');

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }
    const newFriend = {
        name: req.body.name,
        id: model.friends.length,
    }
    model.friends.push(newFriend);
    res.json(newFriend);
};


function getFriend(req,res){
  res.json(model.friends);
}
function getFriends (req,res){
    const friendId = req.params.friendId;
    const friend = model.friends[friendId];
    if(friend){
        res.json(friend);
    }
    else{
        res.status(404).json({
            error:"Friend does not exist"
        });
    }
}
module.exports = {
    postFriend,
    getFriends,
    getFriend,
}