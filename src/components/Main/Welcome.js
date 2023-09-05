import React from 'react';

const Welcome = (props) => {
 
  return (
    <div className="Welcome">
        <h2><span>{props.text}</span></h2>
        
    </div>
  );
};

export default Welcome;