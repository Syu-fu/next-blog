import { getBlogData } from '@/app/_lib/getBlogData';
import styles from '@/app/_components/footer.module.css';

export default function Footer() {
  const data = getBlogData();
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>
        © 2023 {data.props.author.name}. All Rights Reserved
      </span>
    </footer>
  );
}
