import Link from 'next/link';

import styles from '@/components/header.module.css';
import HeaderMenu from '@/components/headerMenu';
import { getBlogData } from '@/lib/getBlogData';

export default function Header() {
  const data = getBlogData();
  return (
    <>
      <header className={styles.header}>
        <HeaderMenu />
        <Link className={styles.title} href="/">
          {data.props.site.title}
        </Link>
      </header>
    </>
  );
}
