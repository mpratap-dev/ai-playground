import { useReducer } from 'react';
import Header from "./components/Header/Header";
import TabsContainer from './components/Tabs/TabBar';
import Chatbox from './components/Chatbox/Chatbox';
import AppProvider from './contexts/AppContext';
import tabReducer, { initialState } from './store/reducers/tabs';
import './colors.css';
import './App.css';
import './grid.css';
// import './fonts.css';

function App() {
  const [tabState, dispatchTab] = useReducer(tabReducer, initialState);
  return (
    <>
      <Header />
      <AppProvider
        tabState={tabState}
        dispatchTab={dispatchTab}
      >
        <div className="row">
          <div className="col-5 border-right">
            <TabsContainer/>
          </div>
          <div className="col-7">
            <Chatbox />
          </div>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
