import Chore from './model';

export const addChores = async (req, res) => {
	const{ choreName, category, allowance, imgurl } = req.body;
	const newChore = new Chore({ choreName, category, allowance, imgurl });
	try{
		console.log(newChore.imgurl);
	return res.status(201).json({ chore: await newChore.save() });
	}catch(e) {
		console.log(e);
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
    const test = { chores: await Chore.find({ category: req.params.category })};
    res.status(200).json({ chores: await Chore.find({ category: req.params.category })});
    } catch(e) {
  return res.status(e.status).json({ error: true, message:'Error with getting user data' });
  }
}

export const deleteById = function(req, res) {
	Chore
		.findByIdAndRemove(req.params.id)
		.exec()
		.then(() => {
			res.status(204).json({ message: 'successfully removed' });
		})
		.catch(err => {
			res.status(500).json({ error: 'something went terribly wrong' });
		});
}
