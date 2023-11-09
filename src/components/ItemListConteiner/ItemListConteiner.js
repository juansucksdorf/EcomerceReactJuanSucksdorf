import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const greetingStyle = {
    fontSize: '45px',
    color: 'black'
    
  };

  return (
    <div>
      <h1 style={greetingStyle}>{greeting}</h1>
    </div>
  );
}

export default ItemListContainer;