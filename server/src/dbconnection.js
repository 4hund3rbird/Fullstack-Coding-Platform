import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://user:user%40123@cluster0.cihedwg.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
const { Schema } = mongoose;

const testschema = new Schema({
  username: String,
  email: String,
  ans: String,
});

const userModel = mongoose.model("student", testschema);

export { userModel };
