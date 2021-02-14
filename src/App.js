// import './fonts.css';
import './colors.css';
import './App.css';
import './grid.css';
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import TabsContainer from './components/Tabs/TabBar';
import Chatbox from './components/Chatbox/Chatbox';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-5 border-right">
          <TabsContainer/>
        </div>
        <div className="col-7">
          <Chatbox />
        </div>
      </div>
    </div>
  );
}

export default App;
