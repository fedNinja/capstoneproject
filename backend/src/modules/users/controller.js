import User from './model';
import { createToken } from './utils/createToken';
import { sendUserInfo } from './utils/sendUserInfo';

export const createUser = async (req, res) => {
  const { userName, password, email } = req.body;
  const user = await User.create({ userName, password, email });
  try {
    return res.status(201).json({
      success: true,
      user: sendUserInfo(user),
      token: `JWT ${createToken(user)}`,
    });
  } catch (e) {
    return res
      .status(400)
      .json({ error: true, message: 'Error with User creation' });
  }
};

export const loginUser = async (req, res, next) => {
  const user = req.user;
  res.json({
    success: true,
    user: sendUserInfo(user),
    token: `JWT ${createToken(user)}`
  });
  return next();
};
