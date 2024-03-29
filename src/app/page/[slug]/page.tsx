import fs from 'fs';

import matter from 'gray-matter';
import { notFound } from 'next/navigation';

import styles from '@/app/page/[slug]/page.module.css';
import { Post } from '@/converter/post';
import TOC from '@/converter/toc';
import { getBlogData } from '@/lib/getBlogData';
import { getPost } from '@/lib/getPost';

import type { Metadata } from 'next';

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const post = getPost(params.slug);
  const data = getBlogData();

  if (!post) return notFound();
  return {
    title: `${post.frontMatter.title} | ${data.site.title}`,
    description: `${data.site.description}'s about`,
  };
};

export default async function Content({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  return (
    <>
      <div className={styles.head}>
        <h1>{post.frontMatter.title}</h1>
        <time className={styles.date}>{post.frontMatter.date}</time>
        <div className={styles.tags}>
          {post.frontMatter.tag.map((tag: string) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div>
        <TOC content={post.content} />
        <Post content={post.content} />
      </div>
    </>
  );
}

export const generateStaticParams = async () => {
  const files = fs.readdirSync('contents/posts');
  return files.map((fileName) => {
    const fileContent = fs.readFileSync(`contents/posts/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      slug: data.slug as string,
    };
  });
};
