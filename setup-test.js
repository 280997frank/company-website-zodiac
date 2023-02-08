const dotenv = require("dotenv");
const moduleAlias = require("module-alias");
const fs = require("fs");
const React = require("react");

const fileList = {};
const styleList = {};
const firebaseLibList = {};

const dirNames = [
  "/assets/images/menus/",
  "/assets/images/orbits/",
  "/assets/images/astronauts/",
  "/assets/images/full-logos/",
  "/assets/images/",
  "/assets/svg/",
];

dirNames.forEach((dirName) => {
  try {
    fs.readdirSync(`.${dirName}`).forEach((file) => {
      fileList[`@${dirName}${file}`] = __dirname + "/__mocks__/index.ts";
    });
  } catch (error) {
    console.warn(`Directory ".${dirName}" is likely missing`);
  }
});

try {
  fs.readdirSync("./styles/").forEach((file) => {
    fileList[`@/styles/${file}`] = __dirname + "/__mocks__/index.ts";
  });
} catch (error) {
  console.warn("Directory `./styles/` is likely missing");
}

try {
  fs.readdirSync("./__mocks__/firebase/").forEach((file) => {
    firebaseLibList[`firebase/${file.replace(".ts", "")}`] =
      __dirname + "/__mocks__/firebase/" + file;
  });
} catch (error) {
  console.warn("Directory `./__mocks__/firebase/` is likely missing");
}

moduleAlias.addAliases(fileList);
moduleAlias.addAliases(firebaseLibList);
moduleAlias.addAlias("@", __dirname);

dotenv.config();
global.React = React;
