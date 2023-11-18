const Chat = require('../models/Chat');
const chatController = {}

chatController.saveChat = async(message, user)=>{
    const newMessage = new Chat({
        chat :message,
        user: {
            id: user._id,  //_id는 몽고디비에서 자동으로 생성해주는 고유한 아이디
            name: user.name,
        }
    });
    await newMessage.save();
    return newMessage;

}

module.exports = chatController;