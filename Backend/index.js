import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routers/studentRouter.js';
import userRouter from './routers/userRouter.js';
import jwt from 'jsonwebtoken';
import productRouter from './routers/productRouter.js';



const app =  express();

// middleware to parse JSON bodies
app.use(express.json());

// middleware to parse URL-encoded bodies(Authentication)
app.use(
    (req,res,next) => {
        let token = req.header("Authorization");

        if(token != null){
            token = token.replace("Bearer ", "");
            jwt.verify(token, "jwt-secret",
                (err,dicoded)=>{
                   if (dicoded == null){
                     res.json({
                        message:"Invalid Token Please Login Again"
                     })
                     return
                   }else{
                     req.user = dicoded;
                   }
                }
            )
        }
       next()
    } 
)




const connectionString="mongodb+srv://achirauwanpriya:Gnab3412@cluster0.0wepwcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectionString).then(
    () => {
        console.log('Database Connected');
    }
).catch(() => {
    console.error('Database Connection Failed');
}
)

app.use("/students", studentRouter)
app.use("/users", userRouter);
app.use("/products", productRouter);

// Start the server
app.listen(5000, 
    () => {
        console.log('Server is Started')
        console.log("Thank You")
    }
);