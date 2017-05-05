import { Router } from 'express';

import * as ChoreController from './controller';

const routes = new Router();

routes.post('/chores', ChoreController.addChores);
routes.get('/chores', ChoreController.getChores);
routes.get('/chores/:id', ChoreController.getChoreById);
routes.get('/chorecategory/:category', ChoreController.getChoresByCategory);
routes.delete('/deletechore/:id', ChoreController.deleteById);

export default routes;
