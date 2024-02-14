import React, { useState } from 'react';

function EventHandlersExample() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  const handleKeyDown = (event) => {
    console.log('Key pressed:', event.key);
  };

  const handleFocus = () => {
    console.log('Input focused');
  };

  const handleBlur = () => {
    console.log('Input blurred');
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered the element');
  };

  const handleMouseLeave = () => {
    console.log('Mouse left the element');
  };

  const handleDoubleClick = () => {
    console.log('Button double-clicked');
  };

  const handleScroll = () => {
    console.log('Element scrolled');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button type="submit">Submit</button>
      </form>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onDoubleClick={handleDoubleClick}
        onScroll={handleScroll}
        style={{ height: '100px', overflow: 'auto', border: '1px solid black' }}
      >
        Scrollable area
      </div>
      <p>Submitted value: {submittedValue}</p>
    </div>
  );
}

export default EventHandlersExample;
