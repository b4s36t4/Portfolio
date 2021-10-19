import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Post.module.css";
import * as components from "../../components/mdxComponents";
import capitalize from "lodash/capitalize";
// import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import path from "path";
import styled from "styled-components";
import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri/index";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { promises as fs } from "fs";
import { useEffect } from "react";

const Like = styled.div`
  position: fixed;
  right: 10%;
  top: 50%;
  font-size: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s cubic-bezier(0.88, -0.03, 1, 1);

  &:hover {
    transform: rotate(1deg) scale(1.05);
  }
`;

function Post({ post, content, files }) {
  const router = useRouter();
  useEffect(() => {
    console.log(files);
  });
  return (
    <>
      <Head>
        <title>Blog - {capitalize(post.title)}</title>
      </Head>
      <Header />
      <div className={styles.post}>
        <div className={styles.postContent}>
          <div className={styles.postTitle}>
            <h1>{post.title}</h1>
          </div>
          <MDXRemote
            {...content}
            components={{
              ...components,
              Fold: components.Fold,
              code: components.Code,
            }}
            scope={{ styled }}
          />
        </div>
        <Like>
          <RiHeart2Line size={40} />
        </Like>
      </div>
      <Footer />
    </>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const files = await fs.readdir(path.resolve(process.cwd(), "posts"));
  const paths = files.map((file) => ({
    params: {
      post: file.split(".")[0],
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const files = await fs.readdir(path.join(process.cwd(), "posts"));
  const file = path.join(process.cwd(), "posts", `${params.post}.mdx`);
  console.log(file);
  const parsed = matter.read(file);
  const markdownContent = await serialize(parsed.content);
  const post = {
    title: parsed.data.title,
    postedAt: parsed.data.createdAt,
    tags: parsed.data.tags,
  };
  return {
    props: { post: post, content: markdownContent, files: files },
  };
};
