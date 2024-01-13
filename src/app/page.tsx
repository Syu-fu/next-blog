import { Article } from '@/components/article';
import { getPosts } from '@/lib/getPosts';

export default function Home() {
  const contents = getPosts();
  return (
    <>
      <section>
        {contents.props.posts.map((post) => {
          return <Article key={post.contentName} post={post} />;
        })}
      </section>
    </>
  );
}
