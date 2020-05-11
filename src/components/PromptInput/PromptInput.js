// Prompt Component React Hook

import React from "react";
import "./PromptInput.scss";
import "../TaskContainer/Button.scss";

const PromptInput = ({
  setValue,
  handleAdd,
  buttonText,
  placeHolder,
  isListName,
  cancelButton,
  cancelButtonText,
}) => {
  return (
    <div className='prompt-container'>
      {isListName ? (
        <input
          type='text'
          className='prompt-container__input-text'
          onChange={setValue}
          placeholder={placeHolder}
        />
      ) : (
        <textarea
          className='prompt-container__text-area'
          onChange={setValue}
          placeholder={placeHolder}
        ></textarea>
      )}
      <button className='button' onClick={handleAdd}>
        {buttonText}
      </button>
      <button className='button' onClick={cancelButton}>
        {cancelButtonText}
      </button>
    </div>
  );
};

export default PromptInput;
