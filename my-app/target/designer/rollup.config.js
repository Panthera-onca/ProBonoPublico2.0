const fs = require("fs");
const path = require("path");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const css = require("rollup-plugin-lit-css");

const baseDir = path.dirname(path.dirname(__dirname));
const themeImportRegex = /themes\/(.*)\/\1.generated.js/;

const parentThemeResolver = () => {
  return {
    name: "parent-theme-resolver",
    resolveId(source) {
      if (themeImportRegex.test(source)) {
        let resolvedPath = path.resolve(baseDir, "frontend", source);
        if (!fs.existsSync(resolvedPath)) {
          resolvedPath = path.resolve(baseDir, "target", "flow-frontend", source);
        }

        if (fs.existsSync(resolvedPath)) {
          return resolvedPath;
        }
      }
      return null;
    },
  };
};

/**
 * Exclude these dependencies that will be imported by designer-wrapper-template.html.
 * Designer detects Lumo imports by `com.vaadin.flow.theme.lumo.Lumo`,
 * Thus, any import that is not included by that class will also not be used in Designer.
 * For example: badge.js, iconset.js, ...
 */
module.exports = {
  external: [
    "construct-style-sheets-polyfill",
    "lit-element",
    "@polymer/polymer/lib/elements/dom-module",
    "@polymer/polymer/lib/utils/style-gather",
    "@vaadin/vaadin-themable-mixin/register-styles",
    "@vaadin/vaadin-lumo-styles/all-imports.js",
    "@vaadin/vaadin-lumo-styles/badge.js",
    "@vaadin/vaadin-lumo-styles/color.js",
    "@vaadin/vaadin-lumo-styles/font-icons.js",
    "@vaadin/vaadin-lumo-styles/icons.js",
    "@vaadin/vaadin-lumo-styles/iconset.js",
    "@vaadin/vaadin-lumo-styles/sizing.js",
    "@vaadin/vaadin-lumo-styles/spacing.js",
    "@vaadin/vaadin-lumo-styles/style.js",
    "@vaadin/vaadin-lumo-styles/typography.js",
  ],
  input: path.resolve(baseDir, "frontend", "generated", "theme.js"),
  output: {
    file: path.resolve(baseDir, "target", "designer", "theme-bundle.js"),
    format: "esm",
  },
  plugins: [nodeResolve(), css(), parentThemeResolver()],
};
