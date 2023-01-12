import {Schema, model} from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
})

const User = model('Blog', userSchema);

export default User