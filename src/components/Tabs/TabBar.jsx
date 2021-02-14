import { useState } from "react";
import Tabs from "./Tabs";
import TabContent from "./TabContent";

const TabsContainer = () => {
  const [tabs, setTabs] = useState([{
    id: 0,
    name: 'script.js', 
    code: 'function name (param) {return param;}'
  }]);
  
  const [activeTab, setActiveTab] = useState(0);

  return (
  <>
    <Tabs tabs={tabs} setTabs={setTabs} setActiveTab={setActiveTab} activeTab={activeTab} />
    <TabContent tabs={tabs} activeTab={activeTab} setTabs={setTabs}/>
  </>
  );
}

export default TabsContainer;