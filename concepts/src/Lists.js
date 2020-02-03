import React from "react";

const Lists = props => {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul> {listItems} </ul>;
};

export default Lists;
