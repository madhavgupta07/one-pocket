import React from 'react';
import "../css/ButtonComponent.css"

const ButtonComponent = ({ label, onClickHandler }) => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"85vh"}}>
      <button className="button" onClick={onClickHandler}>
        {label}
      </button>
    </div>
  );
};

export default ButtonComponent;
