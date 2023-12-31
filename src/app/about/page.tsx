import styles from './about.module.css';
import { getBlogData } from '@/app/_lib/getBlogData';
import { Img } from '@/app/_components/Image';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default async function About() {
  const blog = getBlogData();
  return (
    <>
      <h1>About</h1>
      <div className={styles['profile-container']}>
        <div className={styles.profile}>
          <Img
            src={'profile-pic.webp'}
            alt={`${blog.props.author.name}のプロフィール写真`}
            width={100}
            height={100}
            className={styles['profile-pic']}
          />
          <p>{blog.props.author.name}</p>
          <ul className={styles.links}>
            <li>
              <a
                href={`https://twitter.com/${blog.props.author.external.xtwitter}`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faXTwitter} /> X(Twitter)
              </a>
            </li>
            <li>
              <a
                href={`https://github.com/${blog.props.author.external.github}`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.description}>
          <p
            dangerouslySetInnerHTML={{ __html: blog.props.author.description }}
          />
        </div>
      </div>
    </>
  );
}
