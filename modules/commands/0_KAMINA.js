const fs = require("fs");
module.exports.config = {
  name: "kamina",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("kamina") ||
     react.includes("KAMINA") || react.includes("Kmina") || react.includes("kamine") ||
react.includes("Kmine") ||
react.includes("Kameena") ||
react.includes("kameena") ||     
react.includes("KAMINE")) {
    var msg = {
        body: `तु डबल कमिना 😐😒👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }