import Editor from "../Editor/Editor";

const TabContent = ({activeTab, tabs, setTabs}) => {
  return (
    <div className="tab--content">
      {Array.isArray(tabs) && tabs.map(({id}) => (
        <div className={`editor-container ${activeTab !== id ? 'd-none': ''}`} key={`tab-content_${id}`}>
          <Editor setTabs={setTabs} tabs={tabs} id={id}/>
        </div>
      ))}
    </div>
  )
}

export default TabContent;