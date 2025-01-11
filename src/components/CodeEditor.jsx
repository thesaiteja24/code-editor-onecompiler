import React from 'react';

const CodeEditor = () => {
  return (
    <div style={{ height: '400px', padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h3>Code Editor Placeholder</h3>
      <textarea
        style={{ width: '100%', height: '300px' }}
        placeholder="Write your code here..."
      ></textarea>
    </div>
  );
};

export default CodeEditor;
