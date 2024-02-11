'use client';

import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

import styles from '@/components/copyButton.module.css';

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
        aria-label="クリップボードにコピー"
        onClick={copy}
        disabled={isCopied}
        hidden={!onHover}
        onMouseEnter={() => setOnHover(true)}
      >
        <FontAwesomeIcon icon={faCopy} aria-hidden={true} />
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
