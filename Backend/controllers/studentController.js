import Student from "../models/student.js";


// export function getStudents(req,res){
        
        //read and get all the students information from the database

    //     Student.find().then(

    //         (students)=>{
    //             res.json(
    //                 students
    //             )
    //         }
    //     ).catch(
    //         () =>{
                
    //         }
    //     )
    // }

     //read and get all the students information from the database

    export async function getStudents(req, res) {
        try{
            const students = await Student.find();
            res.json(students);
        }catch(err){
            res.status(500).json({
                message: "Failed to retrieve students",
               
            });
        }
    }

export function createStudent(req,res)
{   // Check if the user is authenticated
        if (req.user == null){
            res.status(401).json({
                message: "Please Login and try again"
            })
            return
        }

        if(req.user.role != "admin"){
            res.status(403).json({
                message: "You must be an admin to create a student"
            })
            return
        }

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
                res.status(401).json({
                    message: "Student Creation Failed",
                });
            }


        )
    }

