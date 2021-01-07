import React from "react";
import "./_events.scss";

const EventCard = ({ event, handleAddEvent }) => {
  const { name, image, id } = event;
  //generate random color
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  //card background style
  const backgroundStyle = {
    background: `url(${image})`,
    backgroundPosition: "right center",
    backgroundSize: "cover",
  };

  return (
    <div
      className="d-flex align-items-end m-3 event"
      style={backgroundStyle}
      onClick={() => handleAddEvent(name, id)}
    >
      <div
        className="event__body d-flex align-items-center justify-content-center"
        style={{ background: `${getRandomColor()}` }}
      >
        <p className="event__body--text p-2">{name}</p>
      </div>
    </div>
  );
};

export default EventCard;
