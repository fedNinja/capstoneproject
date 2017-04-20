import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';

import User from '../model';
import config from '../../../config/config';

/***
JWT Strategy
***/
const jwtOpts = {
  //Tell passport to take Jwt token from the Authorization header
  jwtFromRequest:ExtractJwt.fromAuthHeader('Authorization'),
  secretOrKey:config.JWT_SECRET
};

const jwtStrategy = new JWTStrategy(jwtOpts, async(payload, done) => {
  try{
    const user = await User.findById(payload.id);
    if(user){
      done(null,user);
    }else{
      done(null,false);
    }
  }catch(e){
    return done(e,false);
  }
});

const localOpts = {
  usernameField: "userName"
}
const localStrategy = new LocalStrategy(localOpts, async(userName, password, next) => {
  try{
    const user = await User.findOne({userName});
    if(!user){
      return next(null, false);
    }
    return user.comparePassword(password, (err, isMatch) => {
      if(err){
        return next(err);
      }else if(!isMatch){
        return next(null, false);
      }
      return next(null, user);
    });
  } catch(e){
    return next(e);
  }
});

passport.use(jwtStrategy);
passport.use(localStrategy);
