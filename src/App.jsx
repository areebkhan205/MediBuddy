import { useState } from "react";
import "./App.css";
import HomeNewPage from "./components/Homenew";
import Services from "./components/Newservice";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [image, setImage] = useState();

  return (
    <div>
    
       
       <HomeNewPage/>
      <Services/>
    </div>
  );
}

export default App;
