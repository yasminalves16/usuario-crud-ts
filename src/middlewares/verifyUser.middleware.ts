import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entity';

const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const userRepo = AppDataSource.getRepository(User);

    const users = await userRepo.find();

    const user = users.find((user) => user.id === id);

    if (!user) {
      return res.status(404).json({ message: 'User do not exists' });
    }

    next()
  } catch (err) {
    return res.status(404).json({ message: 'User do not exists' });
  }
};

export default verifyUser;
