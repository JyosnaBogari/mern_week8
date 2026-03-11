import exp from 'express'
import { connect } from 'mongoose'
import { userRoute } from './APIs/userAPI.js';
import { config } from 'dotenv';
import cors from 'cors'
//call the dotenv 
config();


//create app
const app = exp()

//add cors
app.use(cors({
    origin:['http://localhost:5173']
}))
//port 
const PORT = 3000;

//json parser
app.use(exp.json());

//connect to the database
async function connectDB() {
    try {
        await connect(process.env.DB_URL)
        console.log("MongoDB connected successfully");
        // server port 
        app.listen(process.env.PORT, () => {
            console.log(`server running on port ${process.env.PORT}`);
        })

    } catch (err) {
        console.log("errr in connecting DB", err);
    }

}
//calling the database
connectDB();

//Routes 
app.use('/user-api', userRoute);

//dealing with invalid path
//after checking all the pathsi.e APIs then if not match come to here
app.use((req, res, next) => {
    console.log(req.url);
    res.json({ message: `${req.url} is Invalid path` })
});

//error handling middleware
app.use((err, req, res, next) => {
    console.log("err in middleware :", err);
    res.status(500).json({ message: "error", reason: err.message })
})


//the below error handling are applicable to any other application of backend
app.use((err, req, res, next) => {
    // Mongoose validation error
    if (err.name === "ValidationError") {
        return res.status(400).json({
            message: "Validation failed",
            errors: err.errors,
        });
    }
    // Invalid ObjectId
    if (err.name === "CastError") {
        return res.status(400).json({
            message: "Invalid ID format",
        });
    }
    // Duplicate key
    if (err.code === 11000) {
        return res.status(409).json({
            message: "Duplicate field value",
        });
    }
    //all 500's status code related to the server side
    res.status(500).json({
        message: "Internal Server Error",
    });
});