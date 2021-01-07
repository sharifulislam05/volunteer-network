import React from "react";
import trashLogo from "../../../Assets/logos/trash-2 9.png";

const VolunteerTable = ({ event, deleteEvent }) => {
    const { name, email, date, books, _id } = event;
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{date}</td>
        <td>{books}</td>
        <td className="text-center">
          <div className="trash" onClick={() => deleteEvent(_id)}>
            <img
              src={trashLogo}
              alt=""
              className=""
              style={{ height: "25px" }}
            />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default VolunteerTable;
