var automeme = require('./');

automeme.getMeme('html.json', 10)
  .then(console.log)
  .fail(console.error);
