import React, { useRef } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs2015 as theme } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import styled from "styled-components";
import { HiClipboard } from "react-icons/hi/index";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { useSpring, animated } from "react-spring";
SyntaxHighlighter.registerLanguage("javascript", js);
const h2 = styled.h2`
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  padding: 1.2rem 0;
  font-weight: 700;
  & * > code {
    font-size: 1.1rem;
    background-color: #eeb2b2;
    border-radius: 20px;
    padding: 0.5rem;
    font-family: "Poppins", sans-serif;
  }
`;

const h1 = styled.h1`
  font-size: 1.8rem;
  font-family: "Poppins", sans-serif;
  padding: 1.2rem 0;
  font-weight: 700;
  & * > code {
    font-size: 1.1rem;
    background-color: #eeb2b2;
    border-radius: 20px;
    padding: 0.5rem;
    font-family: "Poppins", sans-serif;
  }
`;

const h3 = styled.h3`
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  padding: 1.2rem 0;
  font-weight: 700;
  & *,
  code {
    font-size: 1.1rem;
    background-color: #eeb2b2;
    border-radius: 20px;
    padding: 0.5rem;
    font-family: "Poppins", sans-serif;
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
    font-family: "Poppins", sans-serif;
  }
`;

const InlineCode = styled.code`
  background-color: red;
`;
const x = styled(InlineCode)``;
const StyledP = styled.p`
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
    font-family: "Poppins", sans-serif;
  }
`;

const a = styled.a`
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  position: relative;
  width: fit-content;

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
    font-family: "Poppins", sans-serif;
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
const Code = (props) => {
  const { className, children, ...rest } = props;
  const lang = className.split("-")[1];
  const [copied, setCopied] = React.useState(false);
  const codeRef = useRef(null);
  const doCopyToClipboard = async () => {
    if (!navigator) {
      return;
    } else {
      try {
        const copied = await navigator.clipboard.writeText(
          codeRef.current.innerText
        );
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <Copy ref={codeRef}>
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
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
        }}
        onClick={doCopyToClipboard}
      >
        {copied ? "Copied" : <HiClipboard size={25} />}
      </p>
      <SyntaxHighlighter
        customStyle={{ borderRadius: 10, padding: "1rem" }}
        language={lang}
        style={theme}
      >
        {children}
      </SyntaxHighlighter>
    </Copy>
  );
};

const FoldHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.4s ease-in-out;
  user-select: none;
  cursor: pointer;
`;

const Fold = ({ text, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <FoldHead onClick={() => setOpen(!open)}>
      <div className="flex flex-col my-2 w-max items-start justify-center">
        <div className="flex items-center">
          {open ? <AiFillCaretDown /> : <AiFillCaretRight />}
          <StyledP className="text-xl ml-2 text-gray-700">{text}</StyledP>
        </div>
        {open ? (
          <div className="transition-all duration-200 ease-in-out">
            {children}
          </div>
        ) : null}
      </div>
    </FoldHead>
  );
};

export { h2, StyledP as p, h1, h3, h4, a, li, ul, Code, Fold };
