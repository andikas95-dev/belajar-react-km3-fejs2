import React from 'react';

const Header = ({ nama }) => {
  return (
    <div
      style={{
        border: '2px solid #000',
        padding: '5px',
      }}
    >
      <h3>Header</h3>
      <p>{nama}</p>
    </div>
  );
};

export default Header;
