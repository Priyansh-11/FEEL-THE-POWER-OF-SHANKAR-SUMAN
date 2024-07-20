const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "Wallpaper",
  version: "1.0.0",
  hasPermission: 0,
  credits: "August Quinn",
  description: "Get random wallpapers based on a search query",
  usages: "/wallpaper [query]",
  commandCategory: "Images",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  if (args.length === 0) {
    api.sendMessage("Please provide a query to search for images.", event.threadID, event.messageID);
    return;
  }

  const apiKey = "39178311-acadeb32d7e369897e41dba06";
  const query = encodeURIComponent(args.join(" "));
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&per_page=200`;

  try {
    const response = await axios.get(apiUrl);
    const wallpapers = response.data.hits.filter(wallpaper => {
      const imageUrl = wallpaper.largeImageURL;
      const imageExtension = path.extname(imageUrl);
      return imageExtension === ".jpg" || imageExtension === ".png";
    });

    if (wallpapers.length === 0) {
      api.sendMessage("No wallpapers found for the given query.", event.threadID, event.messageID);
      return;
    }

    let streams = [];
    let counter = 0;

    for (const wallpaper of wallpapers) {
      if (counter >= 10) {
        break;
      }

      const imageUrl = wallpaper.largeImageURL;
      const imageExtension = path.extname(imageUrl);

      let imagePath = path.join(__dirname, `/cache/wallpaper${counter}${imageExtension}`);
      let hasError = false;

      try {
        const imageResponse = await axios.get(imageUrl, { responseType: "arraybuffer" });
        fs.writeFileSync(imagePath, Buffer.from(imageResponse.data, "binary"));
      } catch (error) {
        console.error(error);
        hasError = true;
      }

      if (!hasError) {
        streams.push(fs.createReadStream(imagePath).on("end", () => {
          if (fs.existsSync(imagePath)) {
            fs.unlink(imagePath, err => {
              if (err) console.error(err);
            });
          }
        }));

        counter += 1;
      }
    }

    if (streams.length > 0) {
      let msg = {
        body: `📷 Random Wallpaper Result:`,
        attachment: streams
      };

      api.sendMessage(msg, event.threadID, event.messageID);
    } else {
      api.sendMessage("An error occurred while fetching the wallpapers.", event.threadID, event.messageID);
    }

  } catch (error) {
    console.error(error);
    api.sendMessage("An error occurred while fetching wallpapers.", event.threadID, event.messageID);
  }
};
    