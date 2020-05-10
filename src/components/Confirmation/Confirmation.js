/*
 * The TaskBoard Confirmation Hook
 */
import React from "react";

export const Confirmation = (props) => {
  const { remove, cancel } = props;

  const confirmationWrapper = {
    display: "flex",
    alignItems: "center",
    boxShadow: "rgb(204, 204, 204) 0 0 12px 0",
    fontSize: "small",
    padding: "2px",
  };

  const confirmationButton = {
    borderRadius: "5px",
  };

  return (
    <div style={confirmationWrapper}>
      <h4>Do you really want to remove?</h4>
      <button style={confirmationButton} onClick={remove}>
        Yes
      </button>
      <button style={confirmationButton} onClick={cancel}>
        Cancel
      </button>
    </div>
  );
};
