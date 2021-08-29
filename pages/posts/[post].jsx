import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Client } from "../client";
import { gql } from "@apollo/client";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Footer from '../components/Footer'
import styles from "../../styles/Post.module.css";
import * as components from "../components/mdxComponents/components";
import * as _ from "lodash";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";

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
  transition: all 0.5s cubic-bezier(0.88,-0.03, 1, 1);

  &:hover {
    transform: rotate(10deg) scale(1.1);
  }
`;

function Post({ post, content }) {
  const router = useRouter();
  return (
    <>
      {console.log(post.coverImage)}
      <Head>
        <title>Blog - {_.capitalize(post.title)}</title>
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
              p: components.p,
              h1: components.h1,
              h2: components.h2,
              h3: components.h3,
              h4: components.h4,
              a: components.a,
              li: components.li,
              ul: components.ul,
              code: components.code,
            }}
          />
        </div>
        <Like>
          {" "}
          <FcLike size={40} /> Like{" "}
        </Like>
      </div>
      <Footer />
    </>
  );
}

export default Post;

export const getServerSideProps = async (ctx) => {
  const slug = ctx.query.post;
  try {
    const { data } = await Client.query({
      query: gql`
        query {
            post(slug: "${slug}" ,hostname: "blog.maheshvagicherla.dev") {
                title
                contentMarkdown
                dateAdded
                coverImage
            }
        }
        `,
    });
    const content = await serialize(data.post.contentMarkdown);
    return {
      props: {
        post: data.post,
        content: content,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
