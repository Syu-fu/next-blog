import fs from 'fs';

import matter from 'gray-matter';

export const getPosts = () => {
  const files = fs.readdirSync('contents/posts');
  const posts = files.map((fileName) => {
    const contentName = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`contents/posts/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      contentName: contentName,
    };
  });

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date)
      ? -1
      : 1,
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
};
