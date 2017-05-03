import mongoose, {Schema} from 'mongoose';
import { hash, compare } from 'bcrypt';

const UserSchema = new Schema({
	userName:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
  email:{
    type: String,
		unique: true,
		required: true
  },
	role:{
		type: String,
		enum: ['parent', 'child'],
		default: 'parent'
	}
});

UserSchema.pre("save", function(next) {
	if(!this.isModified("password")) {
		return next();
	}
	const salt = 10;
	hash(this.password, salt, (err, hashPwd) => {
		if(err){
			return next(err);
		}
		this.password = hashPwd;
		return next();
	});
});

UserSchema.methods.comparePassword = function(pwd, next) {
	compare(pwd, this.password, (err, isMatch) => {
		if(err){
			return next(err);
		}
		return next(null, isMatch);
	});
}

export default mongoose.model('User', UserSchema);
