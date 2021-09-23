import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL =
      "mongodb+srv://user:codewithdhruva@cluster0.8u02j.mongodb.net/blog?retryWrites=true&w=majority";

    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useFindAndModify: false,
    });
    console.log("Database connected successfully")
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
