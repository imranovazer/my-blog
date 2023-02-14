import React from "react";
import "./styles/App.scss";
import Authorization from "./pages/Autjorization";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/protectedRoute";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import SideNav from "./components/SIdeNav";
import { useSelector  } from "react-redux";

import CreatePost from "./components/CreatePost";

const NavLayout = () => (
  <>
    <Navbar />
    <div className="Horizont">
      <SideNav />
      <Outlet />
    </div>
  </>
);

const App = () => {
  
  const isActive = useSelector((state)=>state.postBox.isActive)
  
  
  return (
    <div className="App">
      {isActive && <CreatePost/> }
      <Routes>
        <Route path="/Aut/*" element={<Authorization />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<NavLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
