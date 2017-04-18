import Chore from './model';

export const addChores = async (req, res) => {
	const{choreName, category, allowance} = req.body;
	const newChore = new Chore({ choreName, category, allowance });
	try{
	return res.status(201).json({ chore: await newChore.save() });
	}catch(e) {
	return res.status(400).json({ error: true, message:'Error with Chore creation' });
 }
}

export const getChores = async (req, res) => {
	try{
		return res.status(200).json({ chores: await Chore.find({}) });
		}catch(e) {
		return res.status(e.status).json({ error: true, message: 'Error with to get chores data' });
	}
}

export const getChoresByCategory = async (req, res) => {
  try{
    const test = { chores: await Chore.find({category: req.params.category })};
    console.log(test);
    res.status(200).json({ chores: await Chore.find({category: req.params.category })});
    } catch(e) {
  return res.status(e.status).json({ error: true, message:'Error with getting user data' });
  }
}
