import { edata } from "../data.js";
import { users } from "../Model/usersModel.js";


export const getUsers = async (req, res) => {
  const userdata = await users.find();
  res.send(userdata);
};

export const getUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const ans = await users.find({ id: id });
    res.send(ans);
  } catch (error) {
    res.status(400);
    console.log(error.message);
    //throw new Error(error.message);
  }
};

export const postUsers = async(req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const save = new users(data);
    await save.save();
    res.send(data);
  } catch (error){
    res.status(400);
    console.log(error.message);
  }
};

export const putUsersById = async(req, res) => {
  const id = req.params.id;
  const  data = req.body;
  try{
    const filter={id:id};
  let doc = await users.findOneAndUpdate(filter, data, { new: true });
  res.send(doc);
}catch(error){
  res.status(400);
  console.log(error.message);
}
};

export const deleteUserById = async (req, res) => {
  const id = req.params.id;
  try{
    const filter={id:id};
  let doc = await users.deleteOne(filter);
  res.send(doc);
}catch(error){
  res.status(400);
  console.log(error.message);
}
};
