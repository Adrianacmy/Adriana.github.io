import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

class MarkdownTest extends Component{
  render(){

const input = '# This is a header\n\nAnd this is a paragraph';
return (
  <ReactMarkdown source={input} />
)

  }
}

export default MarkdownTest