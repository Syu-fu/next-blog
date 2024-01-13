import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import style from '@/converter/toc.module.css';

const customH2 = ({ ...props }) => {
  return (
    <li>
      <Link href={`#${props.children}`} className="">
        {props.children}
      </Link>
    </li>
  );
};

export default function TOC({ content }: { content: string }) {
  return (
    <>
      <nav className={style.toc}>
        <h2 className={style['toc-title']}>目次</h2>
        <ol className={style['toc-items']}>
          <ReactMarkdown
            className=""
            allowedElements={['h2']}
            components={{
              h2: customH2,
            }}
          >
            {content}
          </ReactMarkdown>
        </ol>
      </nav>
    </>
  );
}
