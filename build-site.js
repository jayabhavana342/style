const nunjucks = require('nunjucks');

nunjucks.configure('', { autoescape: true });
const html = nunjucks.render('src/styleguide/site.html', { });
console.log(html);
