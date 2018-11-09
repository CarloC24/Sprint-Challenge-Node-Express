import React, { useState, useEffect } from 'react';
import ShowActions from './ShowActions';
import AddActionForm from './AddActionForm';
import './App.css';
import { get, deleteAction } from './CRUD';
import UpdateForm from './UpdateForm';

const App = () => {
  const [actions, setActions] = useState({
    actions: [],
    updateBool: false,
    actionId: ''
  });

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
  const updateId = id => {
    console.log(id, 'im at the update id');
    return id;
  };

  const toggleUpdate = id => {
    if (id) {
      setActions(prevstate => ({
        ...prevstate,
        updateBool: !prevstate.updateBool,
        actionId: id
      }));
    } else {
      return false;
    }
  };
  return (
    <div className="app">
      <ShowActions
        actions={actions.actions}
        handleDelete={handleDelete}
        reload={reload}
        toggleUpdate={toggleUpdate}
      />
      <AddActionForm reload={reload} />
      {actions.updateBool ? (
        <UpdateForm actions={actions.actions} id={actions.actionId} />
      ) : null}
    </div>
  );
};

export default App;
