import fs from 'fs';

import type BlogData from '@/types/blogData';

export function getBlogData(): BlogData {
  const data = fs.readFileSync('blog.json');

  const objectData: BlogData = JSON.parse(data.toString());

  return objectData;
}
