let mix = require("laravel-mix");

require("laravel-mix-tailwind");
require("laravel-mix-purgecss");

mix.browserSync({proxy: 'starter.test', port: 8080, notify: false})

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/assets/js/app.js", "public/js")
   .postCss("resources/assets/css/app.css", "public/css")
   .tailwind()
   .purgeCss();

if (mix.inProduction()) {
  mix.version();
}
