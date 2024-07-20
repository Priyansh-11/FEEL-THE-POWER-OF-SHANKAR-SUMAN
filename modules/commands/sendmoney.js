module.exports.config = {
  name: "sendmoney",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Prince Sanel",
  description: "Send money to user",
  commandCategory: "Random",
  usages: "[userid] [amount]",
  cooldowns: 5,
};
module.exports.run = async function({ api, event, args, Currencies }) {
	const { threadID, messageID, senderID } = event;
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const user = args[0];
    const money = parseInt(args[1]);
    const moneyUser = (await getData(senderID)).money;
    if (!args[0]) return api.sendMessage("Need an userid to send money.", threadID, messageID);
    if (money > moneyUser) {
    return api.sendMessage("Not enough money to send. Please check your balance before you send.", threadID, messageID);
    };
    api.sendMessage(`Sending Money to ${user}`, threadID, messageID);
    await decreaseMoney(senderID, money);
    await increaseMoney(user, money);
    api.sendMessage(`Successfully Send ${money} to ${user}`, threadID, messageID);
}