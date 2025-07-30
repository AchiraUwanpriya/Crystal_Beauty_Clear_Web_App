import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routers/studentRouter.js';

const app =  express();

app.use("/students", studentRouter)

// middleware to parse JSON bodies
app.use(express.json());

const connectionString="mongodb+srv://achirauwanpriya:Gnab3412@cluster0.0wepwcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectionString).then(
    () => {
        console.log('Database Connected');
    }
).catch(() => {
    console.error('Database Connection Failed');
}
)



// Start the server
app.listen(5000, 
    () => {
        console.log('Server is Started')
        console.log("Thank You")
    }
);