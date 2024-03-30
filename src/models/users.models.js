// models/User.js
const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const validator = require('validator');
const ROLES = require("../constants/role.constants");

const roleType = {
    ...ROLES,
};

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email format');
            }
        },
    },
    age: {
        type: Number,
        required: true,
        min: 1,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
    },
    role: {
        type: String,
        enum: Object.values(roleType),
        default: 'user',
    },
    carts: {
        type: [
            {
                cart: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "carts",
                },
                _id: false,
            },
        ],
        default: [],
    },

},
    {
        timestamps: true, // Automatically adds timestamps for created/updated at
    });

userSchema.plugin(mongoosePaginate);
const collection = "users";
const userModel = mongoose.model(collection, userSchema);

module.exports = userModel;