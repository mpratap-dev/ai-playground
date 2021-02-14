import Editor from "../Editor/Editor";

const TabContent = ({activeTab, tabs}) => {
  const getContent = (id) => (id ? '/* This is an empty tab.*/' : 'function name (param) {return param;}');

  return (
    <div className="tab--content">
      {Array.isArray(tabs) && tabs.map(({id}) => (
        <div className={`editor-container ${activeTab !== id ? 'd-none': ''}`} key={`tab-content_${id}`}>
          <Editor content={getContent(id)}/>
        </div>
      ))}
    </div>
  )
}

export default TabContent;