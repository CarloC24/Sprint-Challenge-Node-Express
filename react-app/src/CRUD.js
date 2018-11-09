import axios from 'axios';

export const get = async state => {
  try {
    const actions = await axios.get('http://localhost:7000/actions');
    const response = actions.data.response;
    state(response);
  } catch (err) {
    alert(err);
  }
};
