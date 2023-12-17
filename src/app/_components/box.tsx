import styles from '@/app/_components/box.module.css';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Box({ children }: Props) {
  return (
    <main>
      <div className={styles.blog}>
        <div className={styles.main}>
          <div className={styles['global-wrapper']}>
            <div className={styles['main-content-wrap']}>{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
