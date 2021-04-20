const db = require("./db");
const User = require("./models/user");
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const findAll = async () => {
  const users = await User.find({});
  console.log("All users:", users);
};
const createUser = async () => {
  const pets = await User.insertMany(
    { name: "shan", age: 26, status: "active" },
    { name: "Ayman", age: 30, status: "not sure" }
  );
  console.log(pets);
};
const deleteUser = async () => {
  const deletePets = await User.deleteMany({
    name: "Ayman",
  });
  console.log(deletePets);
};
const updateUser = async () => {
  const updatePets = await User.updateMany(
    {
      name: "shan", // find query first pram
    },
    { $set: { status: "not sure" } } // add to db  // this pram is to update or add
  );
  console.log(updatePets);
};
const findAllNames = async () => {
  const namesPets = await User.find({}, { name: 1 });
  console.log("All Names", namesPets);
};
const userOlderThen25 = async () => {
  const petsolder = await User.find({ age: { $gt: 25 } });
  console.log("All Users older then 25 ", petsolder);
};
const userLessThen25 = async () => {
  const petssmaller = await User.find({ status: "active", age: { $lt: 25 } });
  console.log("All Users less then 25 ", petssmaller);
};

const run = async () => {
  await createUser();
  await deleteUser();
  await updateUser();
  await findAllNames();
  await userOlderThen25();
  await userLessThen25();
  await findAll();
};
run();
