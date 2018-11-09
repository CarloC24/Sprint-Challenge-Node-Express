import React from 'react';

export default props => {
  return (
    <div>
      {props.actions.map((item, index) => {
        return (
          <div key={index} onClick={() => props.toggleUpdate(item.id)}>
            <h1>{item.project_id}</h1>
            <h1>{item.description}</h1>
            <h1>{item.notes}</h1>
            <button onClick={() => props.handleDelete(item.id)}>
              Delete Action
            </button>
          </div>
        );
      })}
    </div>
  );
};
