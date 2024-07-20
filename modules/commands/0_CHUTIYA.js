module.exports.config = {
  name: "chutiya",
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
  if (event.body.indexOf("chutiya")>=0 || event.body.indexOf("tutiya")>=0 ||
 event.body.indexOf("cutiya")>=0 ) { 
    var msg = {
        body: ` ${name} तु है चुतिया मैं तो बोट हूं।😒😒👈`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📞", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }