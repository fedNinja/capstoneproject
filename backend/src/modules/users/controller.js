import User from './model';
import { createToken } from './utils/createToken';
import { sendUserInfo } from './utils/sendUserInfo';

export const createUser = async (req, res) => {
	const{ userName, password, email } = req.body;
	const user = await User.create({ userName, password, email });
	try{
	return res.status(201).json({
		success:true,
		user: sendUserInfo(user),
		token:`JWT ${ createToken(user) }`
	});
	}catch(e) {
	return res.status(400).json({ error: true, message: 'Error with User creation' });
	}
}

export const loginUser = async (req, res) => {

}


export const getUsers = async (req, res) => {
	try{
		return res.status(200).json({users: await User.findById(req.user.id)});

		}catch(e) {
		return res.status(e.status).json({ error: true, message: 'Error with to get user data' });
	}
}

export const getUserById = async (req, res) => {
		const userName = req.body.userName;
	try{
		return res.status(200).json({ users: await User.findOne({ userName }) });

		}catch(e) {
		return res.status(e.status).json({ error:true, message: 'Error with getting user data' });
	}

}
