import {Router} from 'express';
import * as UserController from './controller';
import { requireJwtAuth } from '../../utils/requireJwtAuth';

const routes = new Router();

routes.post('/user/signup',  UserController.createUser);
routes.post('/user/login', requireJwtAuth, UserController.loginUser);

export default routes;
