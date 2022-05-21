import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Syntax = ({ children }: { children: any }) => {
  return (
    <SyntaxHighlighter language="javascript" style={monokai}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Syntax;
