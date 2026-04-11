import mongoose from "mongoose";
import joi from "joi";

const Customer = mongoose.model(
 'Customer-DB', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isGold: {
        type: Boolean,
        default: false
    }
 })
)

function validateCustomer(customer){
 const schema = joi.object({
  name: joi.string().min(5).max(50).required(),
  phone: joi.string().min(5).max(50).required(),
  isGold: joi.boolean()
 });
 return schema.validate(customer);
}

export { Customer, validateCustomer };