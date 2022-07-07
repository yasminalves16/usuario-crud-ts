import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entity';

const deleteUserService = async (id: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({ where: { id } });

  await userRepo.delete(user!.id);

  return true;
};

export default deleteUserService;
