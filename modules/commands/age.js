module.exports.config = {
  name: "age",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Blue",
  description: "Calculate your age based on your birthday.",
  usePrefix: true,
  commandCategory: "utility",
  cooldowns: 5,
  usages: "[YYYY-MM-DD]",
};

module.exports.run = function ({ api, event, args }) {
  const birthday = args[0];

  if (!birthday) {
    return api.sendMessage("Please provide your birthday in YYYY-MM-DD format.", event.threadID);
  }

  const currentDate = new Date();
  const birthDate = new Date(birthday);
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const isBeforeBirthday = currentDate.getMonth() < birthDate.getMonth() ||
                           (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate());

  const finalAge = isBeforeBirthday ? age - 1 : age;

  api.sendMessage(`𝚈𝙾𝚄𝚁 𝙰𝙶𝙴 𝙸𝚂 ${finalAge} 𝚃𝙰𝙽𝙳𝙰 𝙼𝙾𝙽𝙰 𝙿𝙰𝙻𝙰😝`, event.threadID);
};
