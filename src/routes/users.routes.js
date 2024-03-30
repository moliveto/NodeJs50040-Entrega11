const { Router } = require("express");
const {
    createUserCtrl,
    getAllUsersCtrl,
    getUserByIdCtrl,
} = require("../controllers/users.controllers");

const router = Router();

// Get All
router.get(`/`, getAllUsersCtrl);
// Register
router.post("/", createUserCtrl);
// Get User
router.get("/:userId", getUserByIdCtrl);

module.exports = router;
