const nunjucks = require('nunjucks');

nunjucks.configure('', { autoescape: true });
const html = nunjucks.render('src/styleguide/site.html', {
    'components_path': '../components/',
    'site_path': '../styleguide/'
});
console.log(html);
