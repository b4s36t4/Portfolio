import mdx from "@mdx-js/mdx";

export const convert = async (mdxConetnt) => {
  const jsx = await mdx("## Hello, World");
  console.log(jsx);
};
