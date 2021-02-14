import './Tabs.css';
import addSVG from '../../assets/svg/plus.svg';
import closeSVG from '../../assets/svg/close.svg';
import reloadSVG from '../../assets/svg/reload.svg';
import { useEffect, useRef } from 'react';

const Tabs = ({tabs, setTabs, activeTab, setActiveTab}) => {
  const tabContainer = useRef(null);
  const addTab = () => {
    const lastTabId = tabs[tabs.length-1]?.id;
    setTabs([...tabs, { name: `newScript${lastTabId+1}.js`, id: lastTabId+1 }]);
    setActiveTab(lastTabId+1);
  };

  const removeTab = (event, id, index) => {
    const tabAtLeft = tabs[index-1];
    event.stopPropagation();
    setTabs(tabs.filter(tab => tab.id !== id));
    if(activeTab === id) {
      setActiveTab(tabAtLeft?.id);
    }
  };

  const makeTabActive = (id) => setActiveTab(id);

  useEffect(() => {
    const currentTab = tabContainer.current.children[tabs.length-1];
    currentTab?.scrollIntoView();
  }, [tabs]);

  return (
    <div className="tabs--row">
      <div className="tabs--container" ref={tabContainer}>
        {Array.isArray(tabs) && tabs.map(({id, name}, index) => (
          <span 
            key={`tab_${id}`}
            className={`tab--links ${activeTab === id ? 'active' : ''}`} 
            onClick={() => makeTabActive(id)}
          >
            {name}
            
            {!!index && (<button className="close-btn" onClick={(event) => removeTab(event, id, index)}>
              <img 
                src={closeSVG} 
                alt="close" 
                width="8" 
                height="8"
              />
            </button>)}
          </span>
        ))}
      </div>

      <button className="add-tab" onClick={addTab}>
        <img src={addSVG} alt="add_tab" height="10" width="10" />
      </button>
      
      <button className="apply-btn">
        <img src={reloadSVG} alt="sync" height="13" width="13" className="reload-icon"/>
        <span className="ml-2">
          Apply changes
        </span>
      </button>
    </div>
  )
}

export default Tabs;