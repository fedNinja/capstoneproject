import Child from './model';
import mongoose from 'mongoose';

export const addChild = async(req,res) => {
	console.log(req.body);
	const{ parent, userName, password, dateOfBirth } = req.body;
	const newChild = new Child({ parent, userName, password, dateOfBirth });
	try{
	return res.status(201).json({ child: await newChild.save() });
	}catch(e) {
	return res.status(400).json({ error: true, message: 'Error with child account creation' });
 }
}

export const getChilds = async (req, res) => {
	try{
		return res.status(200).json({ childs: await Child.find({ parent:req.params.parent }) });
		} catch(e) {
		return res.status(e.status).json({ error: true, message: 'Error with to get child data' });
	}
}

export const getChildById = async (req, res) => {
  try{
    res.status(200).json({ child: await Child.find({ _id: req.params.id }) });
    } catch(e) {
  return res.status(e.status).json({ error: true, message: 'Error with getting child data' });
  }
}

export const assignChores = function(req, res) {
	const childId = req.params.childId;
	let chores = req.body.chore;
	let choresArray = [];
	let ChId, day, status;
	for(var key in chores){
		if(chores.hasOwnProperty(key)){
			ChId = chores[key].ChId;
			day = chores[key].day;
			status = chores[key].status;
			choresArray.push([ChId, day, status]);
		};
	}


/*	export const assignChores = function(req, res) {
		const childId = req.params.childId;
		let chores = req.body.chore;
		let choresArray = [];
		let ChId, day, status;
		for(var key in chores){
			if(chores.hasOwnProperty(key)){
				ChId = chores[key].ChId;
				day = chores[key].day;
				status = chores[key].status;
				choresArray.push([ChId, day, status]);
			};
		}
*/

	Child.findOneAndUpdate({ '_id':childId }, { $push: { assignedChores: { $each: choresArray }}}, { new: true}, function(err, obj){
      if(err){
        res.status(500).send(err);
      }
			else{
				console.log(obj);
				res.status(201).json(obj);
			}
    });
}

export const updateSpending = function(req, res) {
	const childId = req.body.childId;
	const spending = Number(req.body.spending);
	Child.findOneAndUpdate({ '_id':childId }, { $set: { spending: spending }}, { upsert: true }, function(err, obj){
      if(err){
        res.status(500).send(err);
      }
			else{
				res.status(200).json(obj);
			}
    });
}

export const deleteById = function(req, res) {
	Child
		.findByIdAndRemove(req.params.id)
		.exec()
		.then(() => {
			res.status(204).json({ message: 'successfully removed' });
		})
		.catch(err => {
			res.status(500).json({ error: 'something went terribly wrong' });
		});
}

export const deleteChoreById = function(req, res) {
	var assignedChoresId = req.params.assignedChores;

	Child
		.find({ _id: req.params.id, assignedChores: { $all:[[assignedChoresId]] } })
		.exec()
		.then((chore) => {
			res.status(201).json(chore);
		})
		.catch(err => {
			res.status(500).json({ error: 'something went terribly wrong' });
		});
}

export const updateAllowance = function(req, res) {
	const childId = req.body.childId;
	const allowance = Number(req.body.allowance);
	Child.findOneAndUpdate({ '_id': childId }, { $set: {allowance: allowance }}, { upsert: false }, function(err){
      if(err){
        res.status(500).send(err);
      }
    });
}
