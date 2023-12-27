'use client';

import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import styles from '@/app/_components/copyButton.module.css';

export function CopyButton({
  className,
  children,
}: {
  className: string;
  children: any;
}) {
  const [isCopied, setIsCopied] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const myRef = useRef<HTMLPreElement>(null);

  const copy = async () => {
    await navigator.clipboard.writeText(myRef.current?.innerText || '');
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <>
      <button
        className={styles['copy-button']}
        onClick={copy}
        disabled={isCopied}
        hidden={!onHover}
        onMouseEnter={() => setOnHover(true)}
      >
        <FontAwesomeIcon
          className={styles['copy-icon']}
          icon={faCopy}
          aria-label="クリップボードにコピー"
        />
      </button>
      <span
        onMouseEnter={() => setOnHover(true)}
        className={
          isCopied
            ? styles['copy-notification']
            : styles['copy-notification-hidden']
        }
      >
        {isCopied ? 'Copied!' : ''}
      </span>
      <pre
        ref={myRef}
        className={className}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        {children}
      </pre>
    </>
  );
}