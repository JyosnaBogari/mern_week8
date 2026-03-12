import exp from 'express'
import { UserModel } from '../models/userModel.js';
//create the mini express

export const userRoute = exp.Router();

//create the new user 
userRoute.post('/users', async (req, res) => {
    //get the user data from user
    let newUser = req.body;
    //new user document 
    const newUserDoc = new UserModel(newUser)
    //save new user
    let user = await newUserDoc.save();
    //send res
    res.status(201).json({ message: "user created", payload: user });

})

//get the users  or read all users
userRoute.get('/users', async (req, res) => {
    //find the user in mongodb
    let userList = await UserModel.find({ status: true });

    //if user not found return the client side response
    if (userList.length == 0) {
        return res.status(404).json({ message: "users not found" });
    }
    //send res
    res.status(200).json({ message: "all users found", payload: userList });

})

//Read user By Id 
userRoute.get('/users/:id', async (req, res) => {
    // get user from the url
    let uid = req.params.id;
    //find the id 
    let user = await UserModel.findOne({ _id: uid, status: true })
    //if user not found return the client side response
    if (!user) {
        return res.status(404).json({ message: "user not found", payload: null });
    }
    //send res
    res.status(200).json({ message: "user found", payload: user });

})

//delete the user 

userRoute.delete('/users/:id', async (req, res) => {
    // get user from the url
    let uid = req.params.id;
    //soft delete of user by "update"
    let user = await UserModel.findByIdAndUpdate(uid, { $set: { status: false } }, { new: true })
    //if user not found return the client side response 
    //all 400's status code related to the client side
    if (!user) {
        return res.status(404).json({ message: "user not found"});
    }
    //send res 
    //all successfull responses in 200's status code
    res.status(200).json({ message: "user is deleted"});

})



// put and patch :used for change updates 
//put (complete change resource) patch(partial change in resource)
//for put,patch,post has body and if we dont want to mention the content in body still it is safe to give url without the body


//Activate the User(change the status:true)  

userRoute.patch('/users/:id', async (req, res) => {
    // get user from the url
    let uid = req.params.id;
    //soft delete of user by "update"
    let user = await UserModel.findByIdAndUpdate(uid, { $set: { status: true } }, { new: true })
    if (!user) {
        return res.status(404).json({ message: "user not found"});
    }
    //send res 
    //all successfull responses in 200's status code
    res.status(200).json({ message: "user Activated", payload: user });

})