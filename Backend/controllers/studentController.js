import Student from "../models/student.js";


export function getStudents(req,res){
        
        //read and get all the students information from the database

        Student.find().then(

            (students)=>{
                res.json(
                    students
                )
            }
        ).catch(
            () =>{
                
            }
        )
    }

export function createStudent(req,res)
{
        
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

