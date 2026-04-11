import express from "express";
const router = express.Router();
import { User } from "../models/user.js";
import _ from "lodash";
import bcrypt from "bcrypt";
import joi from "joi";
import jwt from "jsonwebtoken";

router.post('/', async (req, res) => {
    const { error } = validate(req.body);

    // if error return error
    if (error) return res.status(400).send(error.details[0].message);

    // check if user already exists
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.');
// here we are hard coding the jwtPrivateKey, which is not a good practice, 
// we should use environment variables to store the jwtPrivateKey
    const token = user.generateAuthToken();
// go to jwt.io and paste the token to see the payload
    res.send(token);
});

function validate(req){
 const schema = joi.object({
  email: joi.string().min(5).max(255).required().email(),
  password: joi.string().min(5).max(255).required()
 });
 return schema.validate(req);
}

export default router;