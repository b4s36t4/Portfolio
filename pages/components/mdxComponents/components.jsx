import React, { useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula as theme } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import styled, { css } from "styled-components";
import { HiClipboard } from "react-icons/hi";
const h2 = styled.h2`
  font-size: 1.7rem;
  font-family: "Poppins", sans-serif;
  padding: 1.2rem 0;
  font-weight: 700;
  & * > code {
    font-size: 1.1rem;
    background-color: #eeb2b2;
    border-radius: 20px;
    padding: 0.5rem;
  }
`;

const h1 = styled.h1`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  padding: 1.2rem 0;
  font-weight: 700;
  & * > code {
    font-size: 1.1rem;
    background-color: #eeb2b2;
    border-radius: 20px;
    padding: 0.5rem;
  }
`;

const h3 = styled.h3`
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  padding: 1.2rem 0;
  font-weight: 700;
  & * , code {
    font-size: 1.1rem;
    background-color: #eeb2b2;
    border-radius: 20px;
    padding: 0.5rem;
  }
`;

const h4 = styled.h4`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  padding: 1.2rem 0;
  font-weight: 700;
  & * > code {
    font-size: 1.1rem;
    background-color: #eeb2b2;
    border-radius: 20px;
    padding: 0.5rem;
  }
`;

const InlineCode = styled.code`
  background-color: red;
`;
const x = styled(InlineCode)``;
const p = styled.p`
  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin: 0.5rem 0;
  word-break: keep-all;
  white-space: pre-pre-line;
  & > * > code {
    font-size: 1.1rem;
    background-color: #eeb2b2;
    border-radius: 20px;
    padding: 0.5rem;
  }

  & > code {
    font-size: 1.1rem;
    background-color: #eeb2b2;
    border-radius: 20px;
    padding: 0.5rem;
  }
`;

const a = styled.a`
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 60%;
    left: -0.1rem;
    right: -0.1rem;
    bottom: 0;
    z-index: -1;
    background-color: #c4c4c4;
    transition: top 0.2s ease-in-out;
  }

  :hover::after {
    top: 40%;
  }
`;

const li = styled.li`
  font-size: 1.1rem;
  font-weight: 600;

  &::before {
    content: "👉🏻";
    margin-right: 0.5rem;
    background-image: url();
  }
  & * > code {
    font-size: 1.1rem;
    background-color: #eeb2b2;
    border-radius: 20px;
    padding: 0.5rem;
  }
`;

const ul = styled.ul`
  margin: 1rem;
`;

const Copy = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;
const code = (props) => {
  const { language, children, ...rest } = props;
  return (
    <Copy>
      <p
        style={{
          position: "absolute",
          zIndex: 1,
          right: 0,
          padding: "0.4rem",
          color: "black",
          fontWeight: "500",
          backgroundColor: "#c4c4c4",
          userSelect: "none",
          cursor: "pointer",
          borderBottomLeftRadius: 10,
          display: 'flex',
          alignItems:'center'
        }}
      >
        <HiClipboard /> Copy
      </p>
      <SyntaxHighlighter
        customStyle={{ borderRadius: 10, padding: "1rem" }}
        language={!language ? "javascript" : ""}
        style={theme}
      >
        {children}
      </SyntaxHighlighter>
    </Copy>
  );
};

// const code = styled.code`
//   font-size: 1.1rem;
//   background-color: #fa9090;
//   padding: 0.5rem;
// `;
// const Code = (props) => {
//   useEffect(() => {
//     console.log(props);
//   });
//   return <div {...props}/>
// };

export { h2, p, h1, h3, h4, a, li, ul, code };
