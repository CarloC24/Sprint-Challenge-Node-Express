import axios from 'axios';

export const get = async state => {
  try {
    const actions = await axios.get('http://localhost:9000/actions');
    const response = actions.data.response;
    state(response);
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
  console.log(id);
  try {
    axios.delete(`http://localhost:9000/actions/${id}`);
  } catch (err) {
    alert(err);
  }
};
