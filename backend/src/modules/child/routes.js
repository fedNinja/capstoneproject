import {Router} from 'express';
import * as ChildController from './controller';
const routes = new Router();

routes.post('/kids', ChildController.addChild);
routes.get('/kids/:parent', ChildController.getChilds);
routes.get('/kid/:id', ChildController.getChildById)
routes.put('/assignChores/:childId', ChildController.assignChores);
routes.put('/updateAllowance', ChildController.updateAllowance);
routes.put('/updateSpending', ChildController.updateSpending);
routes.delete('/deleteChild/:id', ChildController.deleteById);
routes.get('/deleteChore/:id/:assignedChores', ChildController.deleteChoreById);
export default routes;
