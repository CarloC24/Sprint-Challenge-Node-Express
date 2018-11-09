import axios from 'axios';

export const get = async state => {
  try {
    const actions = await axios.get('http://localhost:9000/actions');
    const response = actions.data.response;
    state(prevState => ({
      ...prevState,
      actions: response
    }));
  } catch (err) {
    alert(err);
  }
};

export const insert = async action => {
  try {
    axios.post('http://localhost:9000/actions', action);
  } catch (err) {
    alert(err);
  }
};

export const deleteAction = async id => {
  try {
    axios.delete(`http://localhost:9000/actions/${id}`);
  } catch (err) {
    alert(err);
  }
};

export const updateActionDatabase = async (user, id) => {
  console.log('update action');
  try {
    axios.put(`http://localhost:9000/actions/${id}`, user);
  } catch (err) {
    alert(err);
  }
};
