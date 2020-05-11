// Prompt Component React Hook

import React from "react";
import "./PromptInput.scss";
import "../TaskContainer/Button.scss";

const PromptInput = ({ setValue, handleAdd, buttonText }) => {
  return (
    <div className='prompt-container'>
      <textarea
        className='prompt-container__text-area'
        onChange={setValue}
        placeholder='List Name'
      ></textarea>
      <button className='button' onClick={handleAdd}>
        {buttonText}
      </button>
    </div>
  );
};

export default PromptInput;
