module.exports.config = {
  name: "welcome",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "SHANKAR", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
  if (event.body.indexOf("welcome")>=0 || event.body.indexOf("Welcome")>=0 || event.body.indexOf("wel")>=0 || event.body.indexOf("belcum")>=0 || event.body.indexOf("स्वागत")>=0 || event.body.indexOf("WELCOME")>=0 || event.body.indexOf("स्वागतम्")>=0 || event.body.indexOf("स्वागतम")>=0 || event.body.indexOf("WEL")>=0 || event.body.indexOf("Wel")>=0 ) { 
    var msg = {
        body: ` धन्यवाद 🙂🖐️ ${name} बाबू😍😘👈 `
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }