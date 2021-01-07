import React from "react";
import "./_banner.scss";

const Banner = ({ handleFilter }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector(".banner__input-text").value = "";
  };

  return (
    <div className="container d-flex justify-content-center my-5">
      <div className="text-center">
        <span className="banner-text">I grow by helping people in need.</span>
        <form onSubmit={handleSubmit} className="d-flex justify-content-center">
          <div className="input-group my-3 banner__search">
            <input
              type="text"
              className="banner__input-text"
              placeholder="Search...."
              name="filter"
              onChange={handleFilter}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
