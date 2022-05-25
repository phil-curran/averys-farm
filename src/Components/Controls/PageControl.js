import React from "react";
import ProduceDisplay from "../Produce/ProduceDisplay";
import ScheduleDisplay from "../Schedule/ScheduleDisplay";

class PageControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produceVisibleOnPage: false,
      scheduleVisibleOnPage: true,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      produceVisibleOnPage: !prevState.produceVisibleOnPage,
      scheduleVisibleOnPage: !prevState.scheduleVisibleOnPage,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.scheduleVisibleOnPage) {
      currentlyVisibleState = <ProduceDisplay />;
      buttonText = "Show Produce";
    } else {
      currentlyVisibleState = <ScheduleDisplay />;
      buttonText = "Show Schedule";
    }

    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleClick}>
          {buttonText}
        </button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default PageControl;
