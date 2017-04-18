import {Router} from 'express';
import * as UserController from './controller';
import { requireJwtAuth } from '../../utils/requireJwtAuth';

const routes = new Router();

routes.post('/user/signup', UserController.createUser);
routes.get('/users', requireJwtAuth, UserController.getUsers);
routes.post('/user', UserController.getUserById);
routes.post('/user/login', UserController.loginUser);

export default routes;
