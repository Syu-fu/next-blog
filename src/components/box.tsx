import React from 'react';

import styles from '@/components/box.module.css';

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
