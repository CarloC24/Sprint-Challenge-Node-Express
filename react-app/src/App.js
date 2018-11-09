import React, { useState, useEffect } from 'react';
import ShowActions from './ShowActions';
import AddActionForm from './AddActionForm';
import './App.css';
import { get, deleteAction } from './CRUD';
import UpdateForm from './UpdateForm';

const App = () => {
  const [actions, setActions] = useState([]);

  useEffect(
    () => {
      get(setActions);
    },
    [actions]
  );

  const reload = () => {
    get(setActions);
  };

  const handleDelete = id => {
    deleteAction(id);
    reload();
  };

  const toggleUpdate = id => {
    if (id) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="app">
      <ShowActions
        actions={actions}
        handleDelete={handleDelete}
        reload={reload}
        toggleUpdate={toggleUpdate}
      />
      <AddActionForm reload={reload} />
      {toggleUpdate() ? <UpdateForm /> : null}
    </div>
  );
};

export default App;
