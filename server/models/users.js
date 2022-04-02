const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: String,
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

userSchema.pre(
  'save',
  async function(next) {
    if (this.modifiedPaths().includes("password")) {
      const hash = await bcrypt.hash(this.password, 10);
      this.password = hash;
    }
    next();
  }
);

const User = mongoose.model("User", userSchema);

const login = async (username, password) => { 
  const user = await User.findOne({username});
  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }
  return null;
};

const createUser = async (properties) => {
  return await User.create(properties);
}

module.exports = { createUser, login };
