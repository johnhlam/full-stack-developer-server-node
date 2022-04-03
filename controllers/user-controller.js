import people from './users/users.js';

// Allow users to be reassignable
let users = people;

const userController = app => {

  app.get('/api/users', findAllUsers);
  app.post('/api/users', createUser);

  app.get('/api/users/:uid', findUserById);
  app.put('/api/users/:uid', updateUser);
  app.delete('/api/users/:uid', deleteUser);
};

// Returns all of the users, filtering by type if given as a query param
const findAllUsers = (req, res) => {
  const type = req.query.type;
  if (type) {
    res.json(users.filter(user => user.type === type));
    return;
  }
  res.json(users);
};

// Returns the user that matches the ID given as a path param
const findUserById = (req, res) => {
  const userId = req.params.uid;
  const user = users.find(u => u._id === userId);
  res.json(user);
};

// Creates a new user with the given fields
const createUser = (req, res) => {
  const newUser = req.body;
  newUser._id = (new Date()).getTime() + '';
  users.push(newUser);
  res.json(newUser);
};

// Deletes the user that matches the ID given as a path param
const deleteUser = (req, res) => {
  const userId = req.params['uid'];
  users = users.filter(user => user._id !== userId);
  res.sendStatus(200);
};

// Updates the user that matches the ID given as a path param
const updateUser = (req, res) => {
  const userId = req.params['uid'];
  const updatedUser = req.body;
  users = users.map(user => user._id === userId ? updatedUser : user);
  res.sendStatus(200);
};



export default userController;