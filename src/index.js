import connectDB from "./db/dbConnection.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./env"
})
// ;( async() => {
//     try {
//         await mongoose.connect(`${process.env.CONNNETION_STRING}/${DB_NAME}`)
//     } catch (error) {
//         console.log("Error: ", error);

//     }
// })()

connectDB();
