// Confirmation component React Hook

import React from "react";
import "./Confirmation.scss";

export const Confirmation = ({ remove, cancel }) => {
  return (
    <div className='confirmation__wrapper'>
      <h4 className='confirmation__message'>Confirm remove?</h4>
      <button className='confirmation__button' onClick={remove}>
        &#10004;
      </button>
      <button className='confirmation__button' onClick={cancel}>
        &#10006;
      </button>
    </div>
  );
};
