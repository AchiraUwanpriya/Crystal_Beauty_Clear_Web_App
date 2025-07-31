import User from '../models/user.js';
import bcrypt from "bcrypt";

export function createUser(req, res) {

    const hashedPassword = bcrypt.hashSync(req.body.password,10);
    const user = new User(
   {     email : req.body.email,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        password : hashedPassword
    }
    )
    user.save().then(
        () => {
            res.json({
                message: "User Created Successfully"
            })
        }
    ).catch(
        () => {
            res.json({
                message: "User Creation Failed"
            })
        }
    )
        
    }

    export function loginUser(req, res) {
        
        User.findOne({
            email: req.body.email
        })
        .then(
            (user)=>{
                if(user == null){
                    return res.json(
                        {
                            message: "User Not Found"
                        }
                    )
                }else{
                    const isPasswordMatching=bcrypt.compareSync(req.body.password,user.password);

                    if(isPasswordMatching){
                        return res.json(
                            {
                                message: "Login Successful",
                               
                            }
                        )

                }else{
                    return res.json(
                        {
                        message: "Invalid Password"
                        }
                    )
                }
            }
    })
    }
