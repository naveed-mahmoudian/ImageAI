import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "ImageAI",
    })
    .then(() => console.log("connected to mongodb"))
    .catch((err) => console.error(err));
};

export default connectDB;
