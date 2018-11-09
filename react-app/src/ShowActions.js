import React from 'react';

export default props => {
  return (
    <div>
      {props.actions.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.id}</h1>
          </div>
        );
      })}
    </div>
  );
};
