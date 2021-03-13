import React from 'react';

export default function index(props) {
  const { options } = props;
  return (
    <select name={props.name} onChange={e => props.onChange(e.target.value)} style={{border:'0px'}}>
      {options &&
        options.map(_a => <option value={_a.value}>{_a.label}</option>)}
    </select>
  );
}
