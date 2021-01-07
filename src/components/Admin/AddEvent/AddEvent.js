import Axios from "axios";
import React, { useState } from "react";
import events from "../../../Assets/fakeData/Events";
import uploadLogo from "../../../Assets/logos/cloud-upload-outline 1.png";
import "./_addEvent.scss";
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from "react-toastify";

const AddEvent = () => {
  const [event, setEvent] = useState({});
  const [date, setDate] = useState(new Date());
  //handle input change
  const handleBlur = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setEvent({ ...event, [name]: value });
  };
  //form submit and event data post to server
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      name: event.name,
      description: event.description,
      date: date,
      image: "https://i.ibb.co/g6k8XJ6/good-Education.png",
    };
    Axios.post("https://stark-dawn-42404.herokuapp.com/addEvent", newEvent).then((res) => {
      if (res.data) {
        toast.success("new event created");
        document.querySelector(".form__add-event").reset();
      }
    });
  };
  //   const handleAddEvent = () => {
  //     Axios.post("https://stark-dawn-42404.herokuapp.com/addEvents", events).then((res) => {
  //       if (res.data) {
  //         alert("all data loaded");
  //       }
  //     });
  //   };

  return (
    <section className="admin__content">
      <form onSubmit={handleSubmit} className="form__add-event">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="form-group">
              <label htmlFor="event-title">Event Title</label>
              <input
                type="text"
                className="form-control"
                id="event-title"
                placeholder="Enter title"
                onBlur={handleBlur}
                name="name"
              />
            </div>
            <div className="form-group ">
              <label htmlFor="event-description">Description</label>
              <textarea
                rows="4"
                cols="50"
                className="form-control"
                id="event-description"
                placeholder="Enter Description"
                onBlur={handleBlur}
                name="description"
              ></textarea>
            </div>
          </div>
          <div className="col-12 col-md-5 ml-0">
            <div className="form-group add-event__date">
              <label htmlFor="event-date">Event Date</label> <br />
              <DatePicker
                className="form-control"
                selected={date}
                onChange={(date) => setDate(date)}
              />
            </div>
            <div className="form-group w-50">
              <label htmlFor="file-upload">Banner</label> <br />
              <label
                htmlFor="file-upload"
                className="custom-file-upload alert-success"
              >
                <img
                  src={uploadLogo}
                  alt=""
                  className="mr-3"
                  style={{ height: "30px" }}
                />
                Upload image
              </label>
              <input id="file-upload" type="file" />
            </div>
            <div className="d-flex align-items-end justify-content-end m-0 p-0 mt-md-5 pt-md-5">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default AddEvent;
