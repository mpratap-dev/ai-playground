import './Editor.css';
import MonacoEditor from 'react-monaco-editor';

const Editor = ({setTabs, tabs, id: tabIndex}) => {
  const {code} = tabs.find(tab => tab.id === tabIndex);

  const options = { 
    selectOnLineNumbers: true, 
    fontSize: 14,
    lineHeight: 30,
    automaticLayout: true,
    minimap: {
      enabled: false
    }
  };

  const onChange = (newValue) => {
    setTabs(tabs.map(({name, id, code}) => ({
      name, 
      id,
      code: tabIndex === id ? newValue : code
    })))
  };
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