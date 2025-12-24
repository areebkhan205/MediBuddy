import { useState } from "react";
import "./App.css";
import HomeNewPage from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [image, setImage] = useState();

  return (
    <div>
    
      <Nav/>
       <HomeNewPage/>
     
    </div>
  );
}

export default App;
