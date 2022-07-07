import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entity';
import { IUserUpdate } from '../interfaces/user';

const updateUserService = async (id: string, data: IUserUpdate) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({ where: { id } });
  
  return await userRepo.update(user!.id, {
    name: data.name,
    email: data.email,
    age: data.age,
  });
};

export default updateUserService;
