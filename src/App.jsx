import { useState } from "react";
import "./App.css";
import HomeNewPage from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [image, setImage] = useState();

  return (
    <div>
    <div className="bg-gradient-to-br from-[#101727] to-[#1D2939] w-full h-full flex-grow">
      <Nav/>
       <HomeNewPage/>
     </div>
    </div>
  );
}

export default App;
