import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./_registration.scss";
import DatePicker from "react-datepicker";
import logo from "../../Assets/logos/Group 1329.png";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../../App";
import { Link, useHistory, useParams } from "react-router-dom";
import Axios from "axios";

const Registration = () => {
  const [event, setEvent] = useState({});
  const [date, setDate] = useState(null);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { eventId } = useParams();
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  //get event name for registration input
  useEffect(() => {
    fetchData();
  }, [eventId]);
  const fetchData = async () => {
    try {
      const getData = await Axios.get(`https://stark-dawn-42404.herokuapp.com/event/${eventId}`);
      setEvent(getData.data);
    } catch (error) {
      alert(error.message);
    }
  };
  //registration form submit handler
  const onSubmit = (data) => {
    const newUser = {
      ...data,
      date: new Date(date).toDateString(),
      img: event.image,
    };
    Axios.post(`https://stark-dawn-42404.herokuapp.com/registration`, newUser).then((res) => {
      if (res.data) {
        history.push("/userEvents");
      }
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <div className="d-flex justify-content-center my-5">
          <Link to="/">
            <img src={logo} alt="" className="" />
          </Link>
        </div>
        <div className="registration">
          <h3 className="registration__title text-center my-3">
            Register as a Volunteer
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column align-items-center"
          >
            <input
              name="name"
              defaultValue={loggedInUser.displayName}
              ref={register}
              placeholder="Name"
              className="registration__input"
            />
            <input
              name="email"
              defaultValue={loggedInUser.email}
              ref={register}
              placeholder="Email"
              className="registration__input"
            />
            <DatePicker
              className="registration__input"
              selected={date}
              onChange={(date) => setDate(date)}
              placeholderText="Date"
            />
            {errors.books && (
              <span className="text-danger">Date is required</span>
            )}
            <input
              name="description"
              ref={register({ required: true })}
              placeholder="Description"
              className="registration__input"
            />
            {errors.description && (
              <span className="text-danger error_message">
                Description is required
              </span>
            )}
            <input
              name="books"
              ref={register({ required: true })}
              placeholder="Organize books at library"
              className="registration__input"
              defaultValue={event.name}
            />
            <input
              type="submit"
              className="registration__input btn btn-primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
