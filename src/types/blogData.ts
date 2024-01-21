type BlogData = {
  site: BlogSite;
  author: BlogAuthor;
};

type BlogSite = {
  title: string;
  description: string;
  url: string;
};

type BlogAuthor = {
  name: string;
  email: string;
  description: string[];
  external: {
    github: string;
    xtwitter: string;
    zenn: string;
  };
};

export default BlogData;
