import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import HashNode from "./components/hashnode";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import { Client } from "./client";
import dayjs from "dayjs";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

// onClick = (e) => {
//   let option = e.target.defaultValue;
//   let answer = e.path[4].querySelectorAll("div")[4].textContent;
//   let question = e.path[6].querySelector(".pt-1.disable-select").textContent;

//   d = { question: question, answer: answer, option: option };

//   console.log(d);
// };

// button = document.querySelectorAll("button")[4];
// button.addEventListener('click',onClick)
const AboutMeAvatar = () => {
  return (
    <Image
      src="/avatar.jpg"
      alt="Mahesh Vagicherla's Avatar"
      width={280}
      height={280}
      quality={90}
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
          <span className="text-base line-clamp-3 h-20 py-3 break-normal overflow-hidden overflow-ellipsis w-auto">
            <p>{content}</p>
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
  useEffect(() => {
    if (window !== undefined) {
      window.dayjs = dayjs;
    }
    console.log(posts);
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
                index < 3 && (
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
      <div className={styles.loadMore}>
        <p className="">Load More</p>
      </div>
      <Footer />
      <ReactTooltip effect="solid" />
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const { data } = await Client.query({
    query: gql`
      # Write your query or mutation here
      query {
        user(username: "b4s36t4") {
          username
          numPosts
          publication {
            posts {
              slug
              title
              contentMarkdown
              dateAdded
            }
          }
        }
      }
    `,
  });
  // console.log(data.user.publication.posts)
  const posts = data.user.publication.posts;
  return { posts };
};

export default Home;
