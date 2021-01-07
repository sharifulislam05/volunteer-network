import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import EventCard from "./EventCard";

const Events = ({ filter }) => {
  const [event, setEvent] = useState([]);
  let history = useHistory();
  //load all events from database
  useEffect(() => {
    fetchData();
  }, [filter]);
  const fetchData = async () => {
    try {
      const getEvents = await Axios.get(
        "https://stark-dawn-42404.herokuapp.com/events?search=" + filter
      );
      setEvent(getEvents.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleAddEvent = (name, id) => {
    history.push(`/event/${id}`);
  };

  return (
    <section>
      {event.length === 0 && (
        <div className="spinner" role="status">
          <span className="spinner-border"></span>
          <span>Loading...</span>
        </div>
      )}
      <div className="d-flex">
        <div className="row justify-content-center">
          {event.map((event) => (
            <div key={event._id}>
              <EventCard event={event} handleAddEvent={handleAddEvent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
