import express from 'express';
import mongoose from 'mongoose';
import Student from './models/student.js';

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
    (req,res)=>{
        
        const student = new Student(
            {
                name: req.body.name,
                age: req.body.age,
                city: req.body.city
            }
        )
        student.save().then(
            () =>{
                res.json({
                    message: "Student Created Successfully",
                    student: student
                });
            }

        ).catch(
            ()=>{
                res.json({
                    message: "Student Creation Failed",
                });
            }


        )
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