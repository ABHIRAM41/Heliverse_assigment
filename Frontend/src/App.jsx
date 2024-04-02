import { useState, useEffect } from "react";
import { ContentState } from "./context/ContentProvider";
import "./App.css";
import Profile from "./Components/Pages/Profile";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import NavPages from "./Components/NavPages";
import TeamDetails from "./Components/Pages/TeamDetails";

function App() {
  const { allUsers, setAllUsers, allTeams, setAllTeams } = ContentState();

  const getData = async () => {
    const { data } = await axios.get("/api/users");
    setAllUsers((prev) => (prev = data));
    setTimeout(console.log(allUsers), 1000);
  };
  const getTeamsData = async () => {
    const { data } = await axios.get("/api/team");
    setAllTeams((prev) => (prev = data));
    console.log(allTeams);
  };
  useEffect(() => {
    getData();
    getTeamsData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<NavPages />}>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/team" element={<TeamDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
