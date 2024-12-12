import connectDB from "./db/dbConnection.js";
import dotenv from "dotenv";
import app from "./app.js";
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

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server running on port ${process.env.PORT}`);
        
    })
})
.catch((error) => {
    console.log("mongoDB connection error: ", error);
    
})
