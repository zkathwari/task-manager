// Confirmation component React Hook

import React from "react";
import "./Confirmation.scss";

export const Confirmation = ({ remove, cancel }) => {
  return (
    <div className='confirmation__wrapper'>
      <h4>Do you really want to remove?</h4>
      <button className='confirmation__button' onClick={remove}>
        Yes
      </button>
      <button className='confirmation__button' onClick={cancel}>
        Cancel
      </button>
    </div>
  );
};
