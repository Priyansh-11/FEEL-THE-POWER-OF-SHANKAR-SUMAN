module.exports.config = {
    name: "bible",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "Prince Sanel",
    description: "Random Bible",
    commandCategory: "random",
    usages: "none",
    cooldowns: 2,
};
module.exports.run = async function({ api, event, args }) {
const axios = require("axios");
let { messageID, threadID, senderID, body } = event;
const response = args.join(" ");
try {
var tl = ["Now the Lord is that Spirit: and where the Spirit of the Lord is, there is liberty.\-- 2 Corinthians 3:17 (KJV Holy Bible)", "For with God nothing shall be impossible.\-- Luke 1:37 (KJV Holy Bible)", "Love not sleep, lest thou come to poverty; open thine eyes, and thou shalt be satisfied with bread.\-- Proverbs 20:13 (KJV Holy Bible)", "The just man walketh in his integrity: his children are blessed after him.\-- Proverbs 20:7 (KJV Holy Bible)", " My sheep hear my voice, and I know them, and they follow me:\-- John 10:27 (KJV Holy Bible)", "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.\-- Philippians 4:7 (KJV Holy Bible)", " But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you;\-- Matthew 5:44 (KJV Holy Bible)", "Righteousness keepeth him that is upright in the way: but wickedness overthroweth the sinner.\-- Proverbs 13:6 (KJV Holy Bible)", "For a just man falleth seven times, and riseth up again: but the wicked shall fall into mischief.\-- Proverbs 24:16 (KJV Holy Bible)", "Apply thine heart unto instruction, and thine ears to the words of knowledge.\-- Proverbs 23:12 (KJV Holy Bible)", "Wherefore God also hath highly exalted him, and given him a name which is above every name:\-- Philippians 2:9 (KJV Holy Bible)", " For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.\-- John 3:16 (KJV Holy Bible)", "And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.\-- Philippians 2:11 (KJV Holy Bible)"];
var rand = tl[Math.floor(Math.random() * tl.length)];
api.sendMessage(rand, threadID , messageID);
} catch (error) {
api.sendMessage("An error occurred.", threadID , messageID);
}
};