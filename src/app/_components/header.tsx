import Link from 'next/link';
import { getBlogData } from '@/app/_lib/getBlogData';
import styles from '@/app/_components/header.module.css';
import HeaderMenu from '@/app/_components/headerMenu';

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
