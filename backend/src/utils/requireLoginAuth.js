import passport from 'passport';

import '../modules/users/utils/passport';

export const requireLoginAuth = passport.authenticate('local', { session: false });
