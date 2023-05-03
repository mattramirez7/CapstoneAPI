import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Docs from '../Markdown/doc.md';
import CodeBlock from "../Markdown/CodeBlock";
import '../style/Documentation.css'


function Documentation() {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch(Docs);
      const text = await response.text();
      setMarkdownContent(text);
    };

    fetchMarkdown();
  }, []);

  return (
    <div className="content">
      <ReactMarkdown
        children={markdownContent}
        renderers={{ code: CodeBlock }}></ReactMarkdown>
    </div>
  );  
}

export default Documentation;
