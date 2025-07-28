import express from 'express';
import mongoose from 'mongoose';

const app =  express();

// function success(){
//     console.log('Server is Started');
// }

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

app.get("/",
    (req,res)=>{
        console.log(req.body);
        console.log("get request received")

        let prefix = "Mr"
        if(req.body.gander =="Female" ){
            prefix = "Ms";
        }


        res.json({
            message: "Hello " + prefix + " " + req.body.name,
        }
    );
    }
)

app.post("/",
    ()=>{
        console.log("post request received");
    }
)

app.delete("/",
    ()=>{
        console.log("delete request received");
    }
)

app.listen(5000, 
    () => {
        console.log('Server is Started')
        console.log("Thank You")
    }
);