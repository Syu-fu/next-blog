import '@/../node_modules/prism-theme-github/themes/prism-theme-github-light.css';
import styles from './post.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypePrism from 'rehype-prism-plus';
import remarkCodeTitle from 'remark-code-title';
import remarkToc from 'remark-toc';

export function Post({ content }: { content: string }) {
  const H2 = ({ ...props }) => {
    return (
      <>
        <h2 id={props.children}>
          <a href={`#${props.children}`} aria-hidden="true" tabIndex={-1}>
            <span className={styles['link-icon']}></span>
          </a>
          {props.children}
        </h2>
      </>
    );
  };
  const H3 = ({ ...props }) => {
    return (
      <>
        <h3 id={props.children}>
          <a href={`#${props.children}`} aria-hidden="true" tabIndex={-1}>
            <span className={styles['link-icon']}></span>
          </a>
          {props.children}
        </h3>
      </>
    );
  };
  const H4 = ({ ...props }) => {
    return (
      <>
        <h4 id={props.children}>
          <a href={`#${props.children}`} aria-hidden="true" tabIndex={-1}>
            <span className={styles['link-icon']}></span>
          </a>
          {props.children}
        </h4>
      </>
    );
  };
  const H5 = ({ ...props }) => {
    return (
      <>
        <h5 id={props.children}>
          <a href={`#${props.children}`} aria-hidden="true" tabIndex={-1}>
            <span className={styles['link-icon']}></span>
          </a>
          {props.children}
        </h5>
      </>
    );
  };
  const H6 = ({ ...props }) => {
    return (
      <>
        <h6 id={props.children}>
          <a href={`#${props.children}`} aria-hidden="true" tabIndex={-1}>
            <span className={styles['link-icon']}></span>
          </a>
          {props.children}
        </h6>
      </>
    );
  };
  const Ul = ({ ...props }) => {
    return (
      <>
        <ul className={styles['unordered-list']}>{props.children}</ul>
      </>
    );
  };
  const Ol = ({ ...props }) => {
    return (
      <>
        <ol className={styles['ordered-list']}>{props.children}</ol>
      </>
    );
  };

  return (
    <>
      <ReactMarkdown
        components={{
          h2: H2,
          h3: H3,
          h4: H4,
          h5: H5,
          h6: H6,
          ul: Ul,
          ol: Ol,
        }}
        remarkPlugins={[
          remarkGfm,
          remarkToc,
          remarkCodeTitle,
          remarkRehype,
          rehypePrism,
        ]}
      >
        {content}
      </ReactMarkdown>
    </>
  );
}