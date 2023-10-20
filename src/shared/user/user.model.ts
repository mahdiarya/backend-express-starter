import { ENUM_USER_ROLE } from '../../libs/shared/user.role.interface';

export type IUser = {
  name: string;
  age: number;
  contactNo: string;
  email: string;
  password: string;
  address: string;
  role: ENUM_USER_ROLE;
};