import { Request, Response } from 'express';
import createUserService from '../services/createUser.service';
import listOneService from '../services/listOneUser.service';
import listUsersService from '../services/listUsers.service';
import deleteUserService from '../services/deleteUser.service';
import updateUserService from '../services/updateUser.service';

class UserController {
  static async create(req: Request, res: Response) {
    try {
      const { name, email, password, age } = req.body;

      const user = await createUserService({ name, email, password, age });

      return res.status(201).json(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  static async read(req: Request, res: Response) {
    try {
      const users = await listUsersService();

      return res.status(200).send(users);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  static async readOne(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await listOneService(id);
      console.log('controller' + user);

      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  static async uptade(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const updatePassword = await updateUserService(id, req.body);

      return res.status(200).json({ message: 'User updated' });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await deleteUserService(id);

      return res.status(200).json({ message: 'User deleted with sucess!' });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }
}

export default UserController;
