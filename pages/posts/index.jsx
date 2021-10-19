import React, { useEffect } from "react";
import { promises as fs } from "fs";
function Posts({ data }) {
  useEffect(() => {
    console.log(data);
  });
  return (
    <div>
      <p>posts</p>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const files = await fs.readdir(process.cwd());

  return {
    props: {
      data: files,
    },
  };
}

export default Posts;
