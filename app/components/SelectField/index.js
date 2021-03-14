import React from 'react';

export default function index(props) {
  const { options } = props; 
  return (
    <select
      name={props.name}
      onChange={e => props.onChange(e.target.value)}
      style={{ border: '0px' }}
      value={props.value}
    >
      {options &&
        options.map(_a => (
          <option key={_a.value} value={_a.value}>
            {_a.label}
          </option>
        ))}
    </select>
  );
}
