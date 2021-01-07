import React, { useState } from "react";
import AddEvent from "../AddEvent/AddEvent";
import logo from "../../../Assets/logos/Group 1329.png";
import VolunteerList from "../VolunteerList/VolunteerList";
import "./_admin.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const [toggleEvent, setToggleEvent] = useState(true);

  return (
    <section>
      <div className="row m-0 p-0">
        <div className="col-md-2 pl-3">
          <ul className="list-unstyled sidebar">
            <li className="mb-5">
              <Link to="/">
                <img src={logo} alt="" className="img-fluid" />
              </Link>
            </li>
            <li
              onClick={() => setToggleEvent(true)}
              className={`mb-2 ${toggleEvent && "item__active"}`}
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              volunteer List
            </li>
            <li
              onClick={() => setToggleEvent(false)}
              className={`${!toggleEvent && "item__active"}`}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Event
            </li>
          </ul>
        </div>
        <div className="col-md-10 mt-2 mb-5">
          {toggleEvent ? <h5>VolunteerList</h5> : <h5>Add Event</h5>}
          {toggleEvent ? <VolunteerList /> : <AddEvent />}
        </div>
      </div>
    </section>
  );
};

export default Admin;
