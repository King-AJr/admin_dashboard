import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import "../assets/css/editor.css"

const Editor = () => {
  const [value, setValue] = useState('');

  return (
    <div className="editor-container">
      <h4 className="text-base text-black mb-2">Description</h4>
      <ReactQuill
        value={value}
        onChange={setValue}
        placeholder="Compose an epic..."
        modules={{
          toolbar: [
            [{ 'header': '1'}, {'header': '2'},],
            [{size: []}],
            ['bold', 'italic', 'underline', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
             {'indent': '-1'}, {'indent': '+1'}],
            ['clean']
          ],
        }}
        formats={[
          'header', 'font', 'size',
          'bold', 'italic', 'underline', 'blockquote',
          'list', 'bullet', 'indent',
          'link', 'image', 'code-block'
        ]}
      />
    </div>
  );
};

export default Editor;
