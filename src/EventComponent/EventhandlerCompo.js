import React, { useState } from 'react';

export default function EventhandlerCompo() {
  return (
    <div>
      <ClickCount />
    </div>
  );
}

const ClickCount = () => {
  const [counter, setCounter] = useState(0);

  const hadleCustomClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <div>Counter : {counter}</div>
      <Custombutton onCustomClick={hadleCustomClick} />
    </div>
  );
};

const Custombutton = ({ onCustomClick }) => {
  return <button onClick={onCustomClick}> My Custom btn</button>;
};
