import React, { useEffect, useState } from "react";
import "./_volunteerList.scss";
import Axios from "axios";
import VolunteerTable from "./VolunteerTable";
import { toast, ToastContainer } from "react-toastify";

const VolunteerList = () => {
  const [eventInfo, setEventInfo] = useState([]);
  const [reload, setReload] = useState(true);
  //get all events from database
  useEffect(() => {
    fetchData();
  }, [reload]);
  const fetchData = async () => {
    try {
      const getData = await Axios.get("https://stark-dawn-42404.herokuapp.com/volunteerList");
      setEventInfo(getData.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  //delete event
  const deleteEvent = (id) => {
    Axios.delete(`https://stark-dawn-42404.herokuapp.com/cancelEvent/${id}`).then((res) => {
      if (res.data) {
        setReload(!reload);
        toast.error("Event deleted");
      }
    });
  };
  return (
    <div className="admin__content table-responsive">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email ID</th>
            <th scope="col">Registering date</th>
            <th scope="col">Volunteer List</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {eventInfo.map((event) => (
          <VolunteerTable
            event={event}
            key={event._id}
            deleteEvent={deleteEvent}
          />
        ))}
      </table>
      <ToastContainer />
    </div>
  );
};

export default VolunteerList;
