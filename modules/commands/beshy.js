module.exports.config = {
  name: "beshy",
  version: "1.0.0",
  hasPermission: 0,
  credits: "OPERATOR ISOY",
  description: "",
  commandCategory: "group",
  usages: "",
  cooldowns: 5,
  dependencies: {},
  envConfig: {},
};

module.exports.languages = {
  "en": {
    //
  }
};

module.exports.run = function ({ api, event, args, models, Users, Threads, Currencies, permission }) {
  const message = args.map(word => word + '🤸‍♂️').join(' ');
  api.sendMessage(message, event.threadID);
};