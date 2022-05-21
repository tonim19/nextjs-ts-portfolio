import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Syntax = ({ children }: { children: any }) => {
  return (
    <SyntaxHighlighter language="javascript" style={nightOwl}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Syntax;
