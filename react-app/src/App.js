import React, { useState, useEffect } from 'react';
import ShowActions from './ShowActions';
import AddActionForm from './AddActionForm';
import './App.css';
import { get } from './CRUD';

const App = () => {
  const [actions, setActions] = useState([]);

  useEffect(
    () => {
      get(setActions);
    },
    [get]
  );
  console.log(actions);
  return (
    <div className="app">
      <h1> Kevin I only have a crud on actions it seems redundant XD</h1>
      <ShowActions actions={actions} />
      <AddActionForm />
    </div>
  );
};

export default App;
