import User from './model';
import { createToken } from './utils/createToken';
import { sendUserInfo } from './utils/sendUserInfo';


export const deleteById = function(req, res) {
	User
		.findByIdAndRemove(req.params.id)
		.exec()
		.then(() => {
			res.status(204).json({ message: 'successfully removed' });
		})
		.catch(err => {
			res.status(500).json({ error: 'something went terribly wrong' });
		});
}

export const createUser = async (req, res) => {
  const { userName, password, email, role } = req.body;
  const user = await User.create({ userName, password, email, role });
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
