// import logo from './logo.svg';
import './style/App.css';
// import {
//   Routes,
//   Route
// } from "react-router-dom";
// import Layout from "./components/Layout";
import MainView from "./components/MainView";

function App() {
  return (
    <main className='app-container'>
      <MainView />
      {/* <Routes className="App">
     <Route path="/" element={<Layout />}/>
    <Route path="/" element={<MainView />} />
    </Routes> */}
    </main>
  );
}

export default App;
