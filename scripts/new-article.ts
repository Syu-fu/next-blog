const fs = require('fs');
const handlebars = require('handlebars');
const readline = require('readline/promises');
const source = fs.readFileSync('./scripts/template.md', 'utf8');
const template = handlebars.compile(source);

const date = new Date().toISOString().split('T')[0];
(async () => {
  const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const title = await readInterface.question('Enter article title: ');
  const slug = await readInterface.question('Enter article slug: ');

  readInterface.close();

  const result = template({ title: title, slug: slug, date: date });

  fs.writeFileSync(`./contents/posts/${slug}.md`, result);
  console.log(`New article created at ./contents/posts/${slug}.md`);
})();
