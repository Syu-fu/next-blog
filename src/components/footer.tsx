import styles from '@/components/footer.module.css';
import { getBlogData } from '@/lib/getBlogData';

export default function Footer() {
  const data = getBlogData();
  return (
    <footer className={styles['footer-wrapper']}>
      <div className={styles.footer}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {data.props.author.name}. All Rights
          Reserved
        </p>
        <p className={styles.privacy}>
          このサイトは Google Analytics を使用しています。
        </p>
        <p className={styles.privacy}>
          Google社によるアクセス情報の収集方法および利用方法については、{' '}
          <a
            target="_blank"
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
          >
            Google Analyticsサービス利用規約
          </a>{' '}
          および{' '}
          <a
            target="_blank"
            href="https://policies.google.com/privacy?hl=ja&gl=jp"
          >
            Google社プライバシーポリシー
          </a>{' '}
          によって定められています
        </p>
      </div>
    </footer>
  );
}
