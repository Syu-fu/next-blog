import fs from 'fs';

export function getBlogData() {
  const data = fs.readFileSync('blog.json');

  const objectData = JSON.parse(data.toString());

  return {
    props: objectData,
  };
}
