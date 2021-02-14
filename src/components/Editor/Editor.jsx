import './Editor.css';
import MonacoEditor from 'react-monaco-editor';
import { useState } from 'react';

const Editor = ({content}) => {
  const [code, setCode] = useState(content);

  const options = { 
    selectOnLineNumbers: true, 
    fontSize: 14,
    lineHeight: 30,
    automaticLayout: true,
    minimap: {
      enabled: false
    }
  };

  const onChange = (newValue) => setCode(newValue);
  const editorDidMount = (editor) => editor.focus();

  return (
    <MonacoEditor
      language="javascript"
      theme="vs-dark"
      value={code}
      options={options}
      onChange={onChange}
      editorDidMount={editorDidMount}
    />
  )
}

export default Editor;