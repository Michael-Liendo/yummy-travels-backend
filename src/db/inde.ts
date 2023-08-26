import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_CONNECT}`);

    console.log(colors.cyan("DB CONNECTED"));
  } catch (error) {
    // @ts-ignore
    console.log(colors.red(error));
    throw new Error("Error en la conexion a la base de datos");
  }
};
