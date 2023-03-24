const express = require("express");
const userController = require("../controllesrs/userControlles");
const router = express.Router();



// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/public/img/posts')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   } 
// })


router
  .route("/post")
  .get(userController.protect, userController.getAllPosts)
  .post(userController.protect,userController.uploadPostPhoto,userController.resizePhoto ,userController.post);

router.route("/register").post(userController.signup);
router.route("/login").post(userController.login);
module.exports = router;
