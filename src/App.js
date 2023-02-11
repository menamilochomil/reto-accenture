// import logo from './logo.svg';

// import {
//   Routes,
//   Route
// } from "react-router-dom";
// import Layout from "./components/Layout";
import MainView from "./components/MainView";

function App() {
  return (
    <main>
      <MainView />


      {/* I try to connect the routes but I couldn´t find the bugg I think that could be the way I install react-router-dom
      but I didn't have enought time to fix it.
      
    <Routes className="App">
     <Route path="/" element={<Layout />}/>
    <Route path="/" element={<MainView />} />
    </Routes> */}
    </main>
  );
}

export default App;
