const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//auth
//check user is logged in
const auth = async (req, res) => {
  const { email } = req.user;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      return res.send({ success: true, user });
    } else {
      return res.send({ sucess: false, message: "Không tìm thấy email" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Server error" });
  }
};

//register
const register = async (req, res) => {
  const { name, email, password, phoneNumber, address, type } = req.body;

  try {
    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const checkExist = await User.findOne({
      where: {
        email,
      },
    });
    if (checkExist) {
      res.send({ success: false, message: "Email đã tồn tại" });
    } else {
      const newUser = await User.create({
        name,
        email,
        password: hashPassword,
        phoneNumber,
        address,
        type: type ? type : "CLIENT",
      });
      res
        .status(201)
        .send({ success: true, message: "Đăng kí thành công", newUser });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    const isAuth = bcrypt.compareSync(password, user.password);
    if (isAuth) {
      const token = jwt.sign({ email: user.email, type: user.type }, "tratra", {
        expiresIn: 60 * 60,
      });
      res
        .status(200)
        .send({ success: true, message: "Đăng nhập thành công", token });
    } else {
      res.send({
        success: false,
        message: "Tài khoản hoặc mật khẩu không đúng",
      });
    }
  } else {
    res.send({ success: false, message: "Không tìm thấy email" });
  }
};

//get detail user
const getDetailUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userDetail = await User.findOne({
      where: {
        id,
      },
    });
    res.status(200).send({ success: true, userDetail });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

//upload avatar
const uploadAvatar = async (req, res) => {
  const { file } = req;
  const urlImage = `http://localhost:4000/${file.path}`;
  const { id } = req.params;
  const avatarUpload = await User.findOne({
    where: {
      id: id,
    },
  });
  avatarUpload.avatar = urlImage;
  await avatarUpload.save();
  res.send(avatarUpload);
};
module.exports = { register, login, auth, getDetailUser, uploadAvatar };
