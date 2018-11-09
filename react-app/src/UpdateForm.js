import React, { useState } from 'react';

export default props => {
  const [updateAction, setSingleAction] = useState({
    project_id: '',
    description: '',
    notes: '',
    completed: false
  });

  const handleChange = e => {
    setSingleAction({
      ...updateAction,
      [e.target.placeholder]: e.target.value
    });
  };
  return (
    <div>
      <h1>This is where you update</h1>
      <form>
        <input
          type="text"
          onChange={e => handleChange(e)}
          placeholder="project_id"
          value={updateAction.project_id}
        />
        <input
          type="text"
          onChange={e => handleChange(e)}
          placeholder="project_id"
          value={updateAction.project_id}
        />
        <input
          type="text"
          onChange={e => handleChange(e)}
          placeholder="project_id"
          value={updateAction.project_id}
        />
      </form>
    </div>
  );
};
