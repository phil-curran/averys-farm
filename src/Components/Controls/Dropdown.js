/* eslint-disable no-undef */
import React from "react";
import AvailableProduce from "../../Data/AvailableProduce";

class ProduceControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produceMonthSelection: "January",
    };
  }

  optionItems = AvailableProduce.map((item) => (
    <option value={item.month}> {item.month} </option>
  ));

  handleSelect = () => {
    this.setState((prevState) => ({
      produceMonthSelection: { dropdownSelect },
    }));
    console.log(this.setState);
  };

  render() {
    const currentlyVisibleState = this.state.produceMonthSelection;

    return (
      <>
        <select
          name="produce-by-month"
          id="produce-by-month"
          // onChange={handleSelect}
        >
          {optionItems}
        </select>
      </>
    );
  }
}

export default ProduceControl;
