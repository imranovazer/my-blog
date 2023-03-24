const User = require("../models/users");
const Post = require("../models/posts");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sharp = require("sharp");
const multer = require("multer");

// const multerStorage = multer.diskStorage({
//   destination : (req,file,cb)=>
//   {
//     cb(null ,'public/img/posts') ;
//   },
//   filename : (req,file,cb)=>
//   {
//     //post-54n5jnjn545nj-54545454545.jpeg file ==req.file
//     const ext = file.mimetype.split('/')[1] ;
//     cb(null,`user-${req.user.id}-${Date.now()}.${ext}`) ;
//   }
// })
const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image, please upload image"), false);
  }
};
const uplaod = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.resizePhoto = (req, res, next) => {
  if (!req.file) {
    return next();
  }
  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
  sharp(req.file.buffer)
    .resize(500, 300)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/posts/${req.file.filename}`);
  next();
};

exports.uploadPostPhoto = uplaod.single("photo");
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );

    const passMatch = await bcrypt.compare(req.body.password, user.password);
    console.log(passMatch);

    if (passMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: `${process.env.JWT_EXPIRES}d`,
      });
      res.status(200).json({
        status: "Success",
        data: {
          name: user.name,
          email: user.email,
          token,
        },
      });
    } else {
      res.status(401).json({
        status: "Fail",
        message: "Passwords don't match",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      error,
    });
  }
};

exports.signup = async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 12);
    const newUser = await User.create({ ...req.body, password: hashedPass });
    res.status(200).json({
      status: "succes",
      data: newUser,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      error,
    });
  }
};
exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    if (!token) {
      next(new Error("You are not authorized!"));
    }

    const verify = await jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(verify.id);
    if (!user) {
      next(new Error("You are not authorized!"));
    }

    req.user = user;
    next();
  } else {
    next(new Error("You are not authorized"));
  }
};
exports.post = async (req, res) => {
  try {
    const arguments = {
      userId: req.user._id,
      userName: req.user.name,
      title: req.body.title,
      createdAt: Date.now(),
      heading: req.body.header,
    };
    if (req.file) {
      arguments.image = req.file.filename;
    }

    const newPost = await Post.create(arguments);
    res.status(201).json({
      status: "succes",
      data: {
        post: newPost,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      status: "succes",
      data: posts,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
