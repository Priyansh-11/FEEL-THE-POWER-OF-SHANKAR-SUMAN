const fs = require("fs");
module.exports.config = {
  name: "omfo",
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
  if(react.includes("omfo") ||
     react.includes("OMFO") || react.includes("Omfo") || react.includes("oomfo") ||
react.includes("omfu") ||
react.includes("mfoo")) {
    var msg = {
        body: `ले भईये ओम्फो🙃👈😆`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }