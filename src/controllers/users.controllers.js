const userService = require("../services/users.service");

const getAllUsersCtrl = async (req, res) => {
    const users = await userService.getAllUsers();
    return res.json(users);
};

const createUserCtrl = async (req, res) => {
    const newUser = await userService.createUser(req.body);

    return res.json(newUser);
};

const getUserByIdCtrl = async (req, res) => {
    const { userId } = req.params;

    const user = await userService.getUserById(userId);

    if (!user) {
        return res.status(404).json({
            message: "user not found",
        });
    }

    return res.json(user);
};

module.exports = {
    createUserCtrl,
    getAllUsersCtrl,
    getUserByIdCtrl,
};
