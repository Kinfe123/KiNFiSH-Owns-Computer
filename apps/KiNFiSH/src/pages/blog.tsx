import { getSortedPosts } from '@/lib/posts';

import BlogContents from '@/contents/blog';
import HeaderImage from '@/contents/blog/HeaderImage';
import Page from '@/contents-layouts/Page';

import type { BlogContentsProps } from '@/contents/blog';
import type { GetStaticProps } from 'next';

type BlogProps = {
  posts: BlogContentsProps['posts'];
};

function Blog({ posts }: BlogProps) {
  return (
    <Page
      frontMatter={{
        title: 'Home Made Thoughts and Insights',
        description: 'Some personal thoughts :) ',
      }}
      headerImage={<HeaderImage />}
    >
      <h1 className='text-2xl self-center flex justify-center items-center font-bold '>Blog will be stated soon 😁</h1>

       {/*A place where i should be using the list of blogs */}
      {/* <BlogContents posts={posts} /> */}
    </Page>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const allPostsData = getSortedPosts();

  return {
    props: {
      posts: allPostsData,
    },
  };
};

export default Blog;
