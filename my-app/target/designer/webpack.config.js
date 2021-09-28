const path = require("path");

const { ApplicationThemePlugin } = require("@vaadin/application-theme-plugin");
const baseDir = path.dirname(path.dirname(__dirname));

const frontendFolder = path.resolve(baseDir, "frontend");
const projectStaticAssetsFolders = [
  path.resolve(baseDir, "src", "main", "resources", "META-INF", "resources"),
  path.resolve(baseDir, "src", "main", "resources", "static"),
  frontendFolder,
];

const flowFrontendFolder = path.resolve(baseDir, "target/flow-frontend");
const flowFrontendThemesFolder = path.resolve(flowFrontendFolder, "themes");

const themeProjectFolders = projectStaticAssetsFolders.map((folder) =>
  path.resolve(folder, "themes")
);

const projectStaticAssetsOutputFolder = path.resolve(
  baseDir,
  "target/META-INF/VAADIN/webapp/VAADIN/static"
);

const frontendGeneratedFolder = path.resolve(baseDir, "frontend/generated");

const themeOptions = {
  devMode: true,
  themeResourceFolder: flowFrontendThemesFolder,
  themeProjectFolders: themeProjectFolders,
  projectStaticAssetsOutputFolder: projectStaticAssetsOutputFolder,
  frontendGeneratedFolder: frontendGeneratedFolder,
};

module.exports = {
  mode: "development",
  entry: "./package.json", // fake entry
  output: {
    path: path.resolve(baseDir, "target", "designer"),
    filename: 'webpack-temp-bundle.js',
  },
  //watch: true,
  plugins: [new ApplicationThemePlugin(themeOptions)],
};
