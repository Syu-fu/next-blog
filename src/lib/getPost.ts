import fs from 'fs';
import matter from 'gray-matter';

export const getPost = (slug: string) => {
  const file = fs.readFileSync(`contents/posts/${slug}.md`, 'utf-8');
  const { data, content } = matter(file);

  return {
    frontMatter: data,
    content: content,
  };
};
