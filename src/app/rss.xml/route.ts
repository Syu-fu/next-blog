import Rss from 'rss';
import urlJoin from 'url-join';
import { getPosts } from '@/app/_lib/getPosts';
import { getBlogData } from '@/app/_lib/getBlogData';

const data = getBlogData();

const blogData = {
  SITE_URL: data.props.site.url,
  DESCRIPTION: data.props.site.description,
  TITLE: data.props.site.title,
};

export async function GET() {
  const feed = new Rss({
    title: blogData.TITLE,
    description: blogData.DESCRIPTION,
    feed_url: urlJoin(blogData.SITE_URL, 'rss.xml'),
    site_url: blogData.SITE_URL,
    language: 'ja',
  });

  const props = getPosts();
  props.props.posts.forEach((post) => {
    feed.item({
      title: post.frontMatter.title,
      description: post.frontMatter.description,
      url: urlJoin(blogData.SITE_URL, 'page', post.frontMatter.slug),
      date: post.frontMatter.date,
    });
  });

  return new Response(feed.xml({ indent: false }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
