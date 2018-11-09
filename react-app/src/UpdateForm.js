import React, { useState, useEffect } from 'react';

import { updateActionDatabase } from './CRUD';

export default props => {
  const [updateAction, setSingleAction] = useState({});

  useEffect(() => {
    onMount();
  }, []);

  const handleChange = e => {
    setSingleAction({
      ...updateAction,
      [e.target.placeholder]: e.target.value
    });
  };

  const onMount = () => {
    props.actions.filter(item => {
      if (item.id === props.id) {
        setSingleAction(item);
      } else {
        return null;
      }
    });
  };

  const editAction = e => {
    e.preventDefault();

    updateActionDatabase(updateAction, props.id);
  };
  return (
    <div>
      <h1>This is where you update</h1>
      <form onSubmit={e => editAction(e)}>
        <input
          type="text"
          onChange={e => handleChange(e)}
          placeholder="project_id"
          value={updateAction.project_id}
        />
        <input
          type="text"
          onChange={e => handleChange(e)}
          placeholder="description"
          value={updateAction.description}
        />
        <input
          type="text"
          onChange={e => handleChange(e)}
          placeholder="notes"
          value={updateAction.notes}
        />
        <button onSubmit={e => editAction(e)}> Edit your note</button>
      </form>
    </div>
  );
};
