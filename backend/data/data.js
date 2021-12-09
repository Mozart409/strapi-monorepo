const { global, pages } = require("./en");
const { globalDE, pagesDE } = require("./de");
const { leadFormSubmissions } = require("./lead-form-submissions.json");

module.exports = {
  globals: [global, globalDE],
  pages: [...pages, ...pagesDE],
  leadFormSubmissions,
};
