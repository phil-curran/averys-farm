import React from "react";
import DaySchedule from "./DaySchedule";
import ScheduleData from "../../Data/ScheduleData";

const ScheduleDisplay = () => {
  return (
    <React.Fragment>
      {ScheduleData.map((day) => (
        <DaySchedule
          key={day.day}
          day={day.day}
          location={day.location}
          hours={day.hours}
          booth={day.booth}
        />
      ))}
    </React.Fragment>
  );
};

export default ScheduleDisplay;
