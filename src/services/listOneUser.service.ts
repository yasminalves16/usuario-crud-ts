import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entity';

const listOneService = async (id: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id });

  return user;
};

export default listOneService;

