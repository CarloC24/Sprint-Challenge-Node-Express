import React, { useState } from 'react';
import { insert } from './CRUD';

export default props => {
  const [singleAction, setSingleAction] = useState({
    project_id: '',
    description: '',
    notes: '',
    completed: false
  });

  const handleChange = e => {
    setSingleAction({
      ...singleAction,
      [e.target.placeholder]: e.target.value
    });
  };
  const clear = () => {
    setSingleAction({
      project_id: '',
      description: '',
      notes: '',
      completed: false
    });
  };

  const actionChecker = target => {
    return target.project_id && target.description && target.notes
      ? true
      : false;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (actionChecker(singleAction)) {
      insert(singleAction);
      clear();
      props.reload();
    } else {
      return alert('a field cannot be empty');
    }
  };
  console.log(props);
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          onChange={e => handleChange(e)}
          placeholder="project_id"
          value={singleAction.project_id}
        />
        <input
          type="text"
          onChange={e => handleChange(e)}
          placeholder="description"
          value={singleAction.description}
        />
        <input
          type="text"
          onChange={e => handleChange(e)}
          placeholder="notes"
          value={singleAction.notes}
        />
        <button type="submit" onSubmit={e => handleSubmit(e)}>
          ADD ACTION
        </button>
      </form>
    </div>
  );
};
