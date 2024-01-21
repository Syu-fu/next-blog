import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SVGProps } from 'react';

import styles from '@/app/about/about.module.css';
import { Img } from '@/components/Image';
import { getBlogData } from '@/lib/getBlogData';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = getBlogData();
  return {
    title: `About | ${data.site.title}`,
    description: `${data.site.description}'s about`,
  };
}

export default async function About() {
  const blog = getBlogData();
  return (
    <>
      <h1>About</h1>
      <div className={styles['profile-container']}>
        <div className={styles.profile}>
          <Img
            src={'profile-pic.webp'}
            alt={`${blog.author.name}のプロフィール写真`}
            width={100}
            height={100}
            className={styles['profile-pic']}
          />
          <p>{blog.author.name}</p>
          <ul className={styles.links}>
            <li>
              <a
                href={`https://twitter.com/${blog.author.external.xtwitter}`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faXTwitter} /> X(Twitter)
              </a>
            </li>
            <li>
              <a
                href={`https://github.com/${blog.author.external.github}`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`https://zenn.dev/${blog.author.external.zenn}`}
                target="_blank"
                rel="external noopener noreferrer"
              >
                <SimpleIconsZenn />
                Zenn
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.description}>
          {blog.author.description.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </div>
    </>
  );
}

export function SimpleIconsZenn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M.264 23.771h4.984a.807.807 0 0 0 .645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72a.627.627 0 0 0-.557.323L.03 23.361c-.088.176.029.41.234.41m17.181-.352l6.479-10.408a.477.477 0 0 0-.41-.733h-4.691a.517.517 0 0 0-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779a.648.648 0 0 0 .586-.353"
      ></path>
    </svg>
  );
}
