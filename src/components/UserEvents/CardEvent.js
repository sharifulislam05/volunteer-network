import React from "react";
import "./_cardEvent.scss";

const CardEvent = ({ event, cancelEvent }) => {
  const { books, date, img, _id } = event;

  return (
    <div className="col-11 col-md-5 user__event shadow m-3">
      <div className="d-flex">
        <div className="w-50">
          <img src={img} alt="" className="w-75 h-75" />
        </div>
        <div className="w-50 pb-3">
          <h3>{books}</h3>
          <p>{date}</p>
          <button className="btn btn-danger " onClick={() => cancelEvent(_id)}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
