import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../App";
import NavBar from "../Shared/NavBar/NavBar";
import CardEvent from "./CardEvent";
import "react-toastify/dist/ReactToastify.css";

const UserEvents = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [reload, setReload] = useState(true);
  const [events, setEvents] = useState([]);
  //load specific user event
  useEffect(() => {
    fetchData();
  }, [reload]);
  const fetchData = async () => {
    try {
      const userDate = await Axios.get(
        "https://stark-dawn-42404.herokuapp.com/userEvents?email=" + loggedInUser.email
      );
      setEvents(userDate.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  //delete user event
  const cancelEvent = (id) => {
    Axios.delete(`https://stark-dawn-42404.herokuapp.com/cancelEvent/${id}`).then((res) => {
      if (res.data) {
        setReload(!reload);
        toast.error("event deleted successfully");
      }
    });
  };
  //user signout
  const handleSignOut = () => {
    sessionStorage.removeItem("authToken");
    setLoggedInUser({});
  };

  return (
    <section className="container">
      <NavBar />
      <div className="d-flex justify-content-between mt-5 user-event__header">
        <h3>user:{loggedInUser.name}</h3>
        <h5 className="text-danger" onClick={handleSignOut}>
          sign out
        </h5>
      </div>
      <div className="row mt-5">
        {events.map((event) => (
          <CardEvent event={event} cancelEvent={cancelEvent} key={event._id} />
        ))}
        <ToastContainer />
      </div>
    </section>
  );
};

export default UserEvents;
