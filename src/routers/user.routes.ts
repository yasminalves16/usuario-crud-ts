import { Router } from 'express';
import UserController from '../controllers/createUser.controller';
import verifyUser from '../middlewares/verifyUser.middleware';

const userRoutes = Router();

userRoutes.post('', UserController.create);
userRoutes.get('', UserController.read);
userRoutes.get('/:id', verifyUser, UserController.readOne);
userRoutes.patch('/:id', verifyUser, UserController.uptade);
userRoutes.delete('/:id', verifyUser, UserController.delete);

export default userRoutes;
