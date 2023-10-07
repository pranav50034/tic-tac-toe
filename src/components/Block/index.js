import React from 'react';
import "./style.css"

const Block = ({value, handleClick, style}) => {
  return <div onClick={handleClick} style= {style} className="block">{value}</div>;
}

export default Block