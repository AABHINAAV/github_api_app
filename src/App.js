import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/0_NavBar/Navbar";
import HomePage from "./Components/1_HomePage/HomePage";
import UserCard from "./Components/2_UserCard/UserCard";
import DetailsPage from "./Components/3_DetailsPage/DetailsPage";
import FFPage from "./Components/4_FFPage/FFPage";
import AboutPage from "./Components/5_AboutPage/AboutPage";
import ErrorPage from "./Components/6_ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <UserCard />
              </>
            }
          ></Route>
          <Route path="/About" element={<AboutPage />}></Route>
          <Route
            path="/DetailsPage/:userName"
            element={<DetailsPage />}
          ></Route>
          <Route
            path="/DetailsPage/:userName/followers"
            element={<FFPage />}
          ></Route>
          <Route
            path="/DetailsPage/:userName/followings"
            element={<FFPage />}
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
