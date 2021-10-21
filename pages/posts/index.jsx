import React, { useEffect } from "react";
// import { promises as fs } from "fs";
function Posts({ data }) {
  const [index, setIndex] = React.useState(0);
  const { x } = useSpring({
    from: {
      x: 0,
    },
    x: 1,
    delay: 300,
  });
}

export default Posts;
