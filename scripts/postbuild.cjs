// scripts/postbuild.cjs
const fs = require('fs');
fs.copyFileSync('docs/index.html', 'docs/404.html'); // SPA 404 fallback
fs.writeFileSync('docs/.nojekyll', '');              // отключить Jekyll
console.log('Postbuild: 404.html и .nojekyll созданы.');
