import {Router} from 'express';

import * as ChildController from './controller';

const routes = new Router();

routes.post('/kids', ChildController.addChild);
routes.get('/kids/:parent', ChildController.getChilds);
routes.get('/kid/:id', ChildController.getChildById);
routes.get('/child/:userName', ChildController.getAssignedChores);
routes.patch('/assignChores/:childId', ChildController.assignChores);
routes.put('/updateAllowance', ChildController.updateAllowance);
routes.put('/updateSpending', ChildController.updateSpending);
routes.delete('/deleteChild/:id', ChildController.deleteById);
routes.delete('/deleteChore/:id/:assignedChores', ChildController.deleteChoreById);
routes.delete('/deleteChoreForApproval/:id/:choresForApproval', ChildController.deleteChoreForApprovalById);
routes.put('/chorestoapprove', ChildController.choresToApprove);
routes.get('/getChoresForApproval/:id', ChildController.getChoresForApproval);
export default routes;
