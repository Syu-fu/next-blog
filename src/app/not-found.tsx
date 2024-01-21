import { Metadata } from 'next';
import Link from 'next/link';

import { getBlogData } from '@/lib/getBlogData';

export const generateMetadata = async (): Promise<Metadata> => {
  const data = getBlogData();

  return {
    title: `Not found | ${data.site.title}`,
    description: `page not found`,
  };
};

export default function NotFound() {
  return (
    <>
      <h1>404 Not found</h1>
      <h2>指定されたページは存在しません</h2>
      <p>
        アクセスしていただいたページは、削除もしくは移動した可能性があります。
      </p>
      <p>
        大変お手数ですが、アドレス（URL）をご確認の上再度お探しいただくか、
        <Link href="/">トップページ</Link>からご利用ください。
      </p>
    </>
  );
}
