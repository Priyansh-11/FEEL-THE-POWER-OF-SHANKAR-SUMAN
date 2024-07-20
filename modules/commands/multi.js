const axios = require("axios");

// Goimagesearch
async function searchImages(query) {
  const google = global.nodemodule["googlethis"];
  try {
    const options = {
      page: 1,
      safe: false,
    };
    let result = await google.image(query, options);
    return result;
  } catch (error) {
    console.log("Error searching images:", error);
    return [];
  }
}

// Citizendium
async function searchCitizendium(query, api, event) {
  const google = require("googlethis");
  const options = {
    page: 0,
    safe: false,
    additional_params: {
      hl: "en",
    },
  };

  const languageCodes = {
    tagalog: "tl",
    japanese: "ja",
    russian: "ru",
    german: "de",
  };

  if (args[0] && languageCodes[args[0].toLowerCase()]) {
    options.additional_params.hl = languageCodes[args[0].toLowerCase()];
    query = args.slice(1).join(" ");
  }

  api.sendMessage(`🔎 Searching for "${query}" on Citizendium...`, event.threadID, event.messageID);

  const response = await google.search(`site:en.citizendium.org ${query}`, options);

  if (response.results.length > 0) {
    let title = response.results[0].title;
    let description = response.results[0].description;
    let url = response.results[0].url;

    let result = `𝗧𝗜𝗧𝗟𝗘: ${title}\n\n𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡: ${description}\n\n𝗨𝗥𝗟: ${url}\n\n`;
    try {
      const apiResponse = await axios.get(`https://en.citizendium.org/api.php?format=json&action=query&prop=extracts&exintro&explaintext&titles=${encodeURIComponent(title)}`);
      const pages = apiResponse.data.query.pages;
      const pageId = Object.keys(pages)[0];
      const pageData = pages[pageId];
      const extract = pageData.extract || "";

      if (extract) {
        result += `SUMMARY: ${extract}\n\n`;
      }

      result += `HISTORY: ${url}/History\n`;
      result += `REFERENCES: ${url}/References\n`;
      result += `PUBLISHED: ${url}\n\n`;
      result += `All written content is available under the Creative Commons-Attribution-ShareAlike 3.0 Unported license or any later. Written content that originated in part from Wikipedia is also available under Creative Commons Attribution-NonCommercial-ShareAlike.\n\n`;
    } catch (error) {
      console.error("🚫 ERROR!\n\nError fetching API:", error);
    }

    api.sendMessage(result, event.threadID, event.messageID);
  } else {
    api.sendMessage("🚫 INVALID!\n\nNo results found for the given query.", event.threadID);
  }
}

// Conversational AI
async function chatWithAI(api, event, text) {
  try {
    const introduction = "🤖 AI Conversation:\n\n";
    // Place your existing ChatGPT or Bard Api here
    const url = `dito mo ilagay lods 'wag tanga hahha=${encodeURIComponent(text)}`;
    const resAI = await axios.get(url);
    const response = resAI.data.content;
    api.sendMessage(introduction + `𝗬𝗼𝘂: ${text}\n\n𝗔𝗜: ${response}`, event.threadID, event.messageID);
  } catch (error) {
    console.log("Error in AI conversation:", error);
    api.sendMessage("🚫 An error occurred during the conversation with AI.", event.threadID, event.messageID);
  }
}

module.exports.config = {
  name: "Multi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JOHN RÉ PORAS", //Respect nalang, huwag sanang i-change ang credits. Pero if you don't have respect because you're just ignorant, then OKAY, change it..wala akong paki broo hahha
  description: "An entertainment tool that can send images, find some information and engage in conversations.",
  commandCategory: "Utilities",
  usages: "/Multi [image|chat|citizendium] [query]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const command = args[0];
  const query = args.slice(1).join(" ");

  if (!command || !query) {
    api.sendMessage(
      "Please use the command like this:\n\n/Multi [image | chat | citizendium] [query]",
      event.threadID,
      event.messageID
    );
    return;
  }

  try {
    if (command === "image") {
      let images = await searchImages(query);
      if (images.length === 0) {
        api.sendMessage(`⚠️ No images found for "${query}".`, event.threadID, event.messageID);
        return;
      }

      let streams = [];
      let counter = 0;

      for (let image of images) {
        if (counter >= 30) break; // 30 images ang magiging result, you can change it if you want to...but not the credits.
        let url = image.url;
        if (!url.endsWith(".jpg") && !url.endsWith(".png")) continue;

        let path = __dirname + `/cache/image-${counter}.jpg`;

        try {
          let response = await axios.get(url, { responseType: "arraybuffer" });
          global.nodemodule["fs-extra"].writeFileSync(path, Buffer.from(response.data, "binary"));
        } catch (error) {
          console.log("Error downloading image:", error);
          continue;
        }

        streams.push(
          global.nodemodule["fs-extra"].createReadStream(path).on("end", () => {
            if (global.nodemodule["fs-extra"].existsSync(path)) {
              global.nodemodule["fs-extra"].unlinkSync(path);
            }
          })
        );

        counter += 1;
      }

      if (streams.length === 0) {
        api.sendMessage(`⚠️ No valid images found for "${query}".`, event.threadID, event.messageID);
        return;
      }

      api.sendMessage({ body: `🖼️ Images for "${query}":`, attachment: streams }, event.threadID, () => {});
    } else if (command === "chat") {
      chatWithAI(api, event, query);
    } else if (command === "citizendium") {
      searchCitizendium(query, api, event);
    } else {
      api.sendMessage(`⚠️ Invalid command. Please use one of these commands: image, chat, citizendium`, event.threadID, event.messageID);
    }
  } catch (error) {
    console.log("Error in AI entertainment:", error);
    api.sendMessage("🚫 An error occurred in AI entertainment.", event.threadID, event.messageID);
  }
};
      