const express = require('express');
const friendsController = require('../Controllers/friendsController');
const friendsRouter = express.Router();

friendsRouter.use((req,res,next) => {
    console.log('ip address:',req.ip);
    next();
})
friendsRouter.post('/',friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriend);
friendsRouter.get('/:friendId',friendsController.getFriends);

module.exports = friendsRouter;
