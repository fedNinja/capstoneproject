import mongoose, {Schema} from 'mongoose';

const ChoresSchema = new Schema({
	choreName:{
		type:String,
		required:true
	},
	choreDescription:{
		type:String
	},
  category:{
    type:String,
		required:true
  },
  allowance:{
    type:Number,
    required:true
  },
	imgurl: String
});

export default mongoose.model('Chore', ChoresSchema);
