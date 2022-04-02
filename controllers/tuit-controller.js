import posts from "./tuits/tuits.js";
let tuits = posts;

const tuitController = (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
};

// Creates a new tuit with the given fields
const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = (new Date()).getTime() + '';
  newTuit.likes = 0;
  tuits.push(newTuit);
  res.json(newTuit);
};

// Returns all of the tuits
const findAllTuits = (req, res) => res.json(tuits);

// Updates the user that matches the ID given as a path param
const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
  res.sendStatus(200);
};

// Deletes the user that matches the ID given as a path param
const deleteTuit = (req, res) => {
  const tuitIdToDelete = req.params.tid;
  tuits = tuits.filter(tuit => tuit._id !== tuitIdToDelete);
  res.sendStatus(200);
};

export default tuitController;

