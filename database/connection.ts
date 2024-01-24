import mongoose from "mongoose";

import { initDB } from "./initDB";


const connect = async () => {
  try {
// I didn't use the DB_CONNECTION_STRING defined in the .env file because of a temporary problem.
    const connectionString = 'mongodb://localhost:27017/nodeprojectdev';

    if (!connectionString) {
 console.error("DB_CONNECTION_STRING IS NOT DEFINED IN your .env file");
      return;
    }


    await mongoose.connect(connectionString)

    console.log("Database Connected");

    await initDB();

  } catch (err) {
console.error("Error Connecting to database", err);
  }
};
  
export { connect };