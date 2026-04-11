import express from "express";
const router = express.Router();
import { User, validateUser } from "../models/user.js";
import _ from "lodash";
import bcrypt from "bcrypt";
import config from "config";
import jwt from "jsonwebtoken";

router.post('/', async (req, res) => {
    const { error } = validateUser(req.body);

    // if error return error
    if (error) return res.status(400).send(error.details[0].message);

    // check if user already exists
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already exists');

    // create new user
    let newUser = new User(_.pick(req.body, ['name', 'email', 'password']));

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    await newUser.save();
    // here we are sending only the name and email to the client, not the password
    // res.send(_.pick(newUser, ['name', 'email']));
    const token = newUser.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(newUser, ['name', 'email']));
});


// authentication - who is this user? or who are you?
// authorization - what can this user do? what permission do you have?


export default router;