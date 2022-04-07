import mongoose from 'mongoose';
import tuitsSchema from '../schemas/tuits-schema.js';
const tuitsModel = mongoose.model('TuitModel', tuitsSchema);
export default tuitsModel;
// TODO: What is the proper file structure for models and schemas?