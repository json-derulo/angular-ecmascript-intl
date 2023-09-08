module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-firefox-launcher"),
      require("karma-safarinative-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false,
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    coverageReporter: {
      dir: require("path").join(
        __dirname,
        "../../coverage/angular-ecmascript-intl",
      ),
      subdir: ".",
      reporters: [
        { type: "html" },
        { type: "text-summary" },
        { type: "cobertura" },
      ],
    },
    reporters: ["progress", "kjhtml"],
    browsers: ["Chrome"],
    restartOnFileChange: true,
  });
};
