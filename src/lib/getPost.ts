import fs from 'fs';

import matter from 'gray-matter';

import type FrontMatter from '@/types/frontMatter';

export const getPost = (slug: string) => {
  const file = fs.readFileSync(`contents/posts/${slug}.md`, 'utf-8');
  const { data, content } = matter(file);

  return {
    frontMatter: data as FrontMatter,
    content: content,
  };
};
