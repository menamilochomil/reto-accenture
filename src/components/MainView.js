import  Header  from "./Header";
// import Navbar  from "./Navbar";
import Content  from "./Content";
import '../style/grid.css';

const MainView= () => {
  return (
    <div className="grid">
      <Header/>
      {/* <Navbar/> */}
      <Content/>
    </div>
     
  );
}

export default MainView;