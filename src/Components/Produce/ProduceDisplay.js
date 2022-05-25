import React from "react";
import Produce from "./Produce";
import AvailableProduce from "../../Data/AvailableProduce";
import Dropdown from "../Controls/Dropdown";
import ProduceControl from "../Controls/Dropdown";
import Selector from "../Controls/Test";

const ProduceDisplay = () => {
  return (
    <React.Fragment>
      {/* <Dropdown /> */}
      {/* <ProduceControl /> */}
      {/* <ProduceControl name={ProduceControl.produceMonthSelection} /> */}
      <Selector />
      {AvailableProduce.map((item) => (
        <Produce
          key={item.item}
          month={item.month}
          selection={item.selection}
        />
      ))}
    </React.Fragment>
  );
};

export default ProduceDisplay;
