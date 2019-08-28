import React from 'react';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

interface PreviewProps {
  value: string;
};
export const Preview: React.FC<PreviewProps> = ({
  value
}) => {
  return <div dangerouslySetInnerHTML={{ __html: marked(value) }}></div>
};