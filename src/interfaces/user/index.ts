export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUserUpdate {
  name: string;
  email: string;
  age: number;
}
