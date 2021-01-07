import React, { useState } from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import './_home.scss';

const Home = () => {
  const [filter, setFilter] = useState("");
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <main className="home-container">
      <NavBar />
      <Banner handleFilter={handleFilter} />
      <div className="events-position">
        <Events filter={filter} />
      </div>
    </main>
  );
};

export default Home;
