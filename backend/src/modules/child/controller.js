import Child from './model';
import mongoose from 'mongoose';

export const addChild = async(req,res) => {
	const{ parent, userId, userName, password, age } = req.body;
	const newChild = new Child({ parent, userId, userName, password, age });
	try{
	return res.status(201).json({ child: await newChild.save() });
	}catch(e) {
	return res.status(400).json({ error: true, message: e });
 }
}

export const getChilds = async (req, res) => {
	try{
		return res.status(200).json({ childs: await Child.find({ parent:req.params.parent }).populate("choresForApproval") });
		} catch(e) {
		return res.status(e.status).json({ error: true, message: 'Error with to get child data' });
	}
}

export const getChildById = async (req, res) => {
  try{
    res.status(200).json({ child: await Child.find({ _id: req.params.id }).populate("assignedChores") });
    } catch(e) {
  return res.status(e.status).json({ error: true, message: 'Error with getting child data' });
  }
}

export const assignChores = function(req, res) {
	const childId = req.params.childId;
	const _id = req.body._id;
	Child.findOneAndUpdate({ '_id':childId }, { $push: { assignedChores: _id}}, { new: true}, function (err, obj){
      if(err){
        res.status(500).send(err);
      }
			else{
				res.status(201).json(obj.assignedChores);
			}
    });
}

export const choresToApprove = function(req, res) {
  const userId = req.body.id;
  const choreId = req.body.choreId;
  Child.findOneAndUpdate({ userId }, { $push: { choresForApproval: { $each: [choreId] }}}, { new: true}, function(err, obj){
      if(err){
        res.status(500).send(err);
      }
			else{
				res.status(201).json(obj);
			}
    });
}

export const getAssignedChores = async (req, res) => {
	try{
		return res.status(200).json({ childs: await Child.find({ userName:req.params.userName }).populate("assignedChores") });
		} catch(e) {
		return res.status(e.status).json({ error: true, message: 'Error with to get child data' });
	}
}

export const getChoresForApproval = async (req, res) => {
  try {
    return res.status(200).json({ childs: await Child.find({ _id: req.params.id}).populate("choresForApproval") });
  } catch(e) {
    return res.status(e.status).json({ error: true, message: 'Error getting the chores for approval' });
  }
}

export const updateSpending = function(req, res) {
	const childId = req.body.childId;
	const spending = Number(req.body.spending);
	Child.findOneAndUpdate({ '_id':childId }, { $set: { spending }}, { upsert: true }, function(err, obj){
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
	const assignedChoreId = req.params.assignedChoreId;
	Child
		.find({ _id: req.params.id, assignedChores: { $all:[[assignedChoreId]] } })
		.exec()
		.then((chore) => {
			res.status(201).json(chore);
		})
		.catch(err => {
			res.status(500).json({ error: 'something went terribly wrong' });
		});
}

export const deleteChoreForApprovalById = function(req, res) {
  const choreForApprovalId = req.params.choreForApproval;
	Child
		.find({ _id: req.params.id, choresForApproval: { $all:[[choreForApprovalId]] } })
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
	Child.findOneAndUpdate({ '_id': childId }, { $set: { allowance }}, { upsert: false }, function(err, obj){
      if(err){
        res.status(500).send(err);
      }
      else{
        res.status(200).json(obj);
      }
    });
}
