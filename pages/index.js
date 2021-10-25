import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai/index";
import HashNode from "../components/hashnode";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import path from "path";
import { promises as fs } from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { cloudflareLoader } from "../utils/loader";

const AboutMeDescription = () => {
  return (
    <div className={styles.aboutmeDescription}>
      <div>
        <p>Hi, I’m mahesh</p>
        <p>Full-stack developer, doing Intern at Pariksha.</p>
        <p>Passinate about python,react,UI design, open-source tech.</p>
        <div className={styles.aboutmeSocial}>
          <a target="_blank" href="https://github.com/b4s36t4" rel="noreferrer">
            <AiFillGithub data-tip="b4s36t4" />
          </a>
          <a
            href="https://www.linkedin.com/in/maheshvagicherla/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin data-tip="Mahesh Vagicherla" />
          </a>
          <a
            href="https://hashnode.com/@b4s36t4"
            target="_blank"
            rel="noreferrer"
          >
            <HashNode width="40" height="40" data-tip="b4s36t4" />
          </a>
          <a
            href="https://twitter.com/b4s36t4"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle data-tip="b4s36t4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const AboutMeAvatar = () => {
  return (
    <Image
      src="/avatar.jpg"
      alt="Mahesh Vagicherla's Avatar"
      width={280}
      height={280}
      quality={90}
      loader={cloudflareLoader}
    />
  );
};
const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

const BlogPost = ({ title, posted, content, slug }) => {
  // console.log(dayjs(posted))
  return (
    <div className={styles.blog}>
      <Link href={`/posts/${slug}`} passHref>
        <div className={`${styles.blogContent}`}>
          <span>
            <p className="py-2 overflow-hidden max-h-16 line-clamp-2">
              {title}
            </p>
          </span>
          <span className="text-base line-clamp-3 h-20 py-1 break-normal overflow-hidden overflow-ellipsis w-auto">
            <MDXRemote {...content} lazy />
          </span>
          <p className="mt-3 text-sm">
            {dayjs(posted).format(`MMM-D-YYYY hh:mm A`)}
          </p>
        </div>
      </Link>
    </div>
  );
};

function Home({ posts }) {
  const [postsIndex, setPostsIndex] = useState(3);
  useEffect(() => {
    if (window !== undefined) {
      window.dayjs = dayjs;
    }
  }, [posts]);
  return (
    <div className={styles.main}>
      <Head>
        <title>Mahesh Vagicherla &apos;s</title>
        <meta
          name="description"
          content="Personal portfoilio of Mahesh Vagicherla."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.content}>
        <div className={styles.aboutMe}>
          <AboutMeAvatar />
          <AboutMeDescription />
        </div>
        <div className={styles.blogs}>
          {posts &&
            posts.map(
              (post, index) =>
                index < postsIndex && (
                  <BlogPost
                    key={post.title}
                    slug={post.slug}
                    title={post.title}
                    content={post.contentMarkdown}
                    posted={post.dateAdded}
                  />
                )
            )}
        </div>
      </div>
      {posts && posts.length > postsIndex && (
        <div
          className={styles.loadMore}
          onClick={() => setPostsIndex((postsIndex) => postsIndex + 3)}
        >
          <p className="">Load More</p>
        </div>
      )}
      <Footer />
      <ReactTooltip effect="solid" />
    </div>
  );
}

export async function getStaticProps() {
  const postDir = path.join(process.cwd(), "posts");
  const postFiles = await fs.readdir(postDir);
  const postsPromise = postFiles.map(async (file) => {
    const grayMatter = matter.read(path.join(postDir, file));
    const content = await serialize(grayMatter.content);
    const post = {
      title: grayMatter.data.title,
      slug: grayMatter.data.slug,
      contentMarkdown: content,
      dateAdded: grayMatter.data.createdAt,
    };
    return post;
  });
  const posts = await Promise.all(postsPromise);
  return {
    props: {
      posts: posts,
    },
  };
}

export default Home;
