const express = require("express");
const userController = require("../controllesrs/userControlles");
const router = express.Router();

router
  .route("/post")
  .get(userController.protect, userController.getAllPosts)
  .post(userController.post);

router.route("/register").post(userController.signup);
router.route("/login").post(userController.login);
module.exports = router;
