import React, { useState, useEffect } from 'react';
import ShowActions from './ShowActions';
import AddActionForm from './AddActionForm';
import './App.css';
import { get, deleteAction } from './CRUD';

const App = () => {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    get(setActions);
  }, []);

  const reload = () => {
    console.log('you reached me');
    get(setActions);
  };

  const handleDelete = id => {
    deleteAction(id);
    reload();
  };
  return (
    <div className="app">
      <h1> Kevin I only have crud on actions it seems redundant XD</h1>
      <ShowActions
        actions={actions}
        handleDelete={handleDelete}
        reload={reload}
      />
      <AddActionForm reload={reload} />
    </div>
  );
};

export default App;
