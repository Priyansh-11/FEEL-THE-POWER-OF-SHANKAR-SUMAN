module.exports.config = {
  name: "motki",
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
  if (event.body.indexOf("motki")>=0 || event.body.indexOf("Motki")>=0 || event.body.indexOf("MOTKI")>=0 || event.body.indexOf("MOTI")>=0 || event.body.indexOf("moti")>=0 || event.body.indexOf("Moti")>=0 || event.body.indexOf("मोटी")>=0 || event.body.indexOf("मोटकी")>=0 || event.body.indexOf("matki")>=0 || event.body.indexOf("Mtki")>=0 ) { 
    var msg = {
        body: `  ${name} और तु मोटा भैंसा गेंडा 😒😝👈 `
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }