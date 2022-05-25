import React, { useState } from "react";
import AvailableProduce from "../../Data/AvailableProduce";

const Selector = () => {
  const [selected, setSelected] = useState("January");

  const optionItems = AvailableProduce.map((item) => (
    <option key={item.month} value={item.month}>
      {" "}
      {item.month}{" "}
    </option>
  ));

  const handleSelect = (e) => {
    setSelected(e.target.value || null);
    console.log("selection changed");
    console.log(selected);
  };

  return (
    <div>
      <select onChange={handleSelect}>{optionItems}</select>
    </div>
  );
};

export default Selector;
