const projectDb = require('./data/helpers/projectModel');

const checker = r => {
  if (r.name && r.description) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  get: async (req, res) => {
    try {
      const response = await projectDb.get();
      res.status(200).json({ response });
    } catch (err) {
      res.status(404).json(err);
    }
  },
  getId: async (req, res) => {
    try {
      const { id } = req.params;
      const response = await projectDb.get(id);
      res.status(200).json({ response });
    } catch (err) {
      res.status(404).json({ message: 'no user' });
    }
  },
  addAction: async (req, res) => {
    const user = req.body;
    if (checker(user)) {
      try {
        const response = await projectDb.insert(user);
        res.status(204).json(response);
      } catch (err) {
        res.status(404).json({ message: 'cant read the req.body' });
      }
    } else {
      res.status(500).json({ message: 'Invalid request!' });
    }
  },
  updateAction: async (req, res) => {
    const user = req.body;
    console.log(user);
    const { id } = req.params;
    if (checker(user)) {
      try {
        const response = await projectDb.update(id, user);
        res.status(204).json(response);
      } catch (err) {
        res.status(404).json({ message: 'cant read the req.body' });
      }
    } else {
      res.status(500).json({ message: 'Invalid request!' });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await projectDb.remove(id);
      res.status(200).json({ message: 'Successfully Removed user' });
    } catch (err) {
      res.status(404).json({ message: 'user not found please put a valid id' });
    }
  }
};
