const fs = require('fs');

function getBlogData() {
  const data = fs.readFileSync('blog.json');

  const objectData = JSON.parse(data.toString());

  return {
    props: objectData,
  };
}
module.exports = {
  siteUrl: getBlogData().props.site.url,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './out',
  exclude: ['/rss.xml'],
};
