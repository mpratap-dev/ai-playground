import { useState } from "react";
import Tabs from "./Tabs";
import TabContent from "./TabContent";

const TabsContainer = () => {
  const [tabs, setTabs] = useState([{
    name: 'script.js', 
    id: 0
  }]);
  
  const [activeTab, setActiveTab] = useState(0);

  return (
  <>
    <Tabs tabs={tabs} setTabs={setTabs} setActiveTab={setActiveTab} activeTab={activeTab} />
    <TabContent tabs ={tabs} activeTab={activeTab} />
  </>
  );
}

export default TabsContainer;