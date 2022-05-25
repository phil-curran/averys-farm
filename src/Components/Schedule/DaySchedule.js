import React from "react";
import PropTypes from "prop-types";

const DaySchedule = (props) => {
  return (
    <div classNameName="card">
      <div className="card-body">
        <h5 className="card-title">{props.day}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.location}</h6>
        <p className="card-text">Hours: {props.hours}</p>
        <p classNameName="card-text">Booth: {props.booth}</p>
        <a href="#" className="card-link">
          More info...
        </a>
      </div>
    </div>
  );
};

DaySchedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
};

export default DaySchedule;
