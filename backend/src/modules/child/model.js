import mongoose, {Schema} from 'mongoose';

const ChildSchema = new Schema({
  parent:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
	userName:{
		type:String,
		required:true
	},
  password:{
    type:String,
		required:true
  },
	age:{
		type:String,
		required:true
	},
  assignedChores:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chore"
  }],
  choresForApproval:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chore"
  }],
  allowance:{
    type:Number
  },
  spending:{
    type:Number
  }

});

export default mongoose.model('Child', ChildSchema);
