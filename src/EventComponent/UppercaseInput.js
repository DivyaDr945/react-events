import React from 'react';

const toInputUppercase = (e) => {
  e.target.value = ('' + e.target.value).toUpperCase();
};

export default function UppercaseInput() {
  const [name, setName] = React.useState('');

  return (
    <div>
      <input
        name={name}
        onChange={(e) => setName(e.target.value)}
        onInput={toInputUppercase} // apply on input which do you want to be capitalize
      />
    </div>
  );
}
