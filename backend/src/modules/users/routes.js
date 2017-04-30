import { Router } from 'express';
import * as UserController from './controller';
import { requireLoginAuth } from '../../utils/requireLoginAuth';

const routes = new Router();

routes.post('/user/signup', UserController.createUser);
routes.post('/user/login', requireLoginAuth, UserController.loginUser);
routes.delete('/deleteuser/:id', UserController.deleteById);


export default routes;
