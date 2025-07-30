import express from 'express';
import { createStudent, getStudents } from '../controllers/studentController.js';

const studentRouter = express.Router();

studentRouter.get("/",getStudents);

 studentRouter.post("/",createStudent); 
   
studentRouter.put("/", 
    () => {

    console.log ("Put request received");
})

studentRouter.delete("/", 
    () => {

    console.log ("Delete request received");
})

export default studentRouter;
