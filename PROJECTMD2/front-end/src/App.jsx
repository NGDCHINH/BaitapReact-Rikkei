import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import ListAnime from "./components/ListAnime";
import AnimeDetail from "./components/AnimeDetail";

function App() {
  return (
    <div className="bg-[#000c17] h-full w-full">
      <Header />
      <div className="flex justify-center">
        <div className="bg-[#000c17] h-[880px] ml-10">
          <SideBar />
        </div>
        <div className="bg-[#1d3042] w-[1000px] rounded-xl">
          {/* <Routes>
            <Route path="/" element={<ListAnime />} />
            <Route path="/anime/:id" element={<AnimeDetail />} />
          </Routes> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
