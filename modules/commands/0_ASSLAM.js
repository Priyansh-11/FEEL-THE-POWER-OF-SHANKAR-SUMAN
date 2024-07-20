const fs = require("fs");
module.exports.config = {
  name: "asslama",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("assalam") ||
     react.includes("ASSLAM") || react.includes("aslam") || react.includes("ASLAM") ||
react.includes("Aslam") ||
react.includes("Asslam")) {
    var msg = {
        body: `🥀वालेुकुम अस्लाम🥀 ${name} बाबू😌👈`,attachment: fs.createReadStream(__dirname + `/shankar/assm.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😌", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }