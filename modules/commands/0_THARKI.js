module.exports.config = {
  name: "tharki",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "John Lester", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
  if (event.body.indexOf("tharki")>=0 ||  event.body.indexOf("tarki")>=0 ) { 
    var msg = {
        body: ` ${name} तु ठरकी तेरा बाप ठरकी तेरा खानदान ठरकी 😒😒👈`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📞", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }