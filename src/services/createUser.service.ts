import { IUser } from '../interfaces/user';
import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entity';
import bcrypt from 'bcrypt';

const createUserService = async ({ name, email, password, age }: IUser) => {
  const userRepo = AppDataSource.getRepository(User);

  const users = await userRepo.find();

  const verifyEmail = users.find((user) => user.email === email);

  if (verifyEmail) {
    throw new Error('Email already exists');
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.age = age;

  userRepo.create(user);

  await userRepo.save(user);

  return { ...user, password: undefined };
};

export default createUserService;
