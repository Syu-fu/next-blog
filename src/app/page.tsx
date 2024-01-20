import { Article } from '@/components/article';
import { getBlogData } from '@/lib/getBlogData';
import { getPosts } from '@/lib/getPosts';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = getBlogData();
  return {
    title: data.site.title,
    description: data.site.description,
  };
}

export default function Home() {
  const contents = getPosts();
  return (
    <>
      <section>
        {contents.posts.map((post) => {
          return <Article key={post.contentName} post={post} />;
        })}
      </section>
    </>
  );
}
