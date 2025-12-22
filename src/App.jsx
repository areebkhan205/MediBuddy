import Home from "./pages/Home";
import Condition from "./pages/Condition";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConditionDetail from "./pages/ConditionDetail";
import Blog from "./pages/Blog";
import Symptoms from "./pages/Symptoms";
import Diagnosis from "./pages/Diagnosis";
import Treatment from "./pages/Treatment";
import Support from "./pages/Living";
import "./App.css";
import { SignUp } from "./pages/signup";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { useState } from "react";

import { ReportCheck } from "./pages/ReportCheck";
import { ReportImage } from "./pages/reportImage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [image, setImage] = useState();

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !isLogin && <Home isLogin={isLogin} setIsLogin={setIsLogin} />
          }
        />
        <Route
          path="/:_id"
          element={
            isLogin ? (
              <Home isLogin={isLogin} setIsLogin={setIsLogin} />
            ) : (
              <div className="h-screen w-screen flex items-center justify-center ">
                <p className="text-xl font-medium  ">User not found</p>
              </div>
            )
          }
        />

        <Route path="/report" element={<ReportCheck setImage={setImage} />} />
        <Route path="/preview/image" element={<ReportImage img={image} />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/conditions" element={<Condition />} />
        <Route
          path="/conditions/:conditionName"
          element={<ConditionDetail />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
