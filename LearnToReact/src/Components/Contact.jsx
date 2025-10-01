import { CloudCog } from 'lucide-react';
import React, { useRef } from 'react'

const Contact = () => {

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const handleClick = () => {
    console.log(inputRef.current.value);

  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <br />
      <br />
      <button onClick={focusInput}>Focus Input</button>
      <br />
      <br />
      <button onClick={handleClick} >Click me</button>
    </div>
  );

}

export default Contact
