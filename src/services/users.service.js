const userModel = require("../models/users.models");
const { createHashValue, isValidPasswd } = require("../utils/encrypt");

const getAllUsers = async () => {
    let users = await userModel.find();
    return users;
};

const createUser = async (userBody) => {
    const { first_name, last_name, email, age, password, role } = userBody;

    const pswHashed = await createHashValue(password);

    const newUser = {
        first_name,
        last_name,
        email,
        age,
        role,
        password: pswHashed,
    };

    return userModel.create(newUser);
};

const getUserById = async (userId) => {
    try {
        const user = await userModel.find({ _id: userId });
        return user;
    } catch (error) {
        console.log(
            "getUserById ~ error:",
            error
        );
    }
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
};