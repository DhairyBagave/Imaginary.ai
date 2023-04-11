import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

export default connectDB;

// mongoose
//   .connect(dbUrl)
//   .then(() => {
//     console.log("MONGO CONNECTION OPEN!!!");
//   })
//   .catch((err) => {
//     console.log("MONGO OH NO ERROR!!!!");
//     console.log(err);
//   });
