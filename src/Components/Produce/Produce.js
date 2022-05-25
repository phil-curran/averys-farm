import React from "react";
import PropTypes from "prop-types";

const Produce = (props) => {
  return (
    <React.Fragment>
      <hr />
      <h3>{props.month}</h3>
      <p>{props.selection.join(", ")}</p>
    </React.Fragment>
  );
};

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string),
};

export default Produce;
