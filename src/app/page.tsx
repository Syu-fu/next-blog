import { getPosts } from '@/lib/getPosts';
import { Article } from '@/components/article';

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
