import { Noto_Sans } from 'next/font/google';
import Link from 'next/link';

import styles from '@/components/article.module.css';

const notoSans = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

type Props = {
  post: {
    frontMatter: {
      [key: string]: any;
    };
    contentName: string;
  };
};

export function Article({ post }: Props) {
  return (
    <>
      <article key={post.contentName} className={styles['main-content']}>
        <div className={styles['main-content-post']}>
          <h2 className={styles['main-content-title']}>
            <Link href={`page/${post.contentName}`}>
              {post.frontMatter.title}
            </Link>
          </h2>
          <small
            className={`${styles['main-content-date']} ${notoSans.className}`}
          >
            {post.frontMatter.date}
          </small>
          <p className={styles['main-content-description']}>
            {post.frontMatter?.description}
          </p>
          <Link
            href={`page/${post.contentName}`}
            className={styles['main-content-link']}
            aria-label={`記事「${post.frontMatter.title}」についての続きを読む`}
          ></Link>
        </div>
      </article>
    </>
  );
}
