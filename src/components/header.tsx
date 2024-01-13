import Link from 'next/link';
import { getBlogData } from '@/lib/getBlogData';
import styles from '@/components/header.module.css';
import HeaderMenu from '@/components/headerMenu';

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
