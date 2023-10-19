import httpStatus from 'http-status';
import config from '../../../../configs/app.config';
import { Secret } from 'jsonwebtoken';
import { IUser } from '../../../../shared/user/user.model';
import { User } from '../../../../shared/user/user.entity';
import ApiError from '../../../../libs/errors/api.error';
import { AuthUtils } from '../../../../libs/helpers/hash.helper';
import { jwtHelpers } from '../../../../libs/helpers/jwt.helper';


const signUp = async (payload: IUser) => {
  const { email, password } = payload;

  // Check User Exist
  const userExist = await User.findOne({ email }).lean();
  if (userExist) {
    throw new ApiError(httpStatus.NOT_ACCEPTABLE, 'User already exists!');
  }

  // Hash Password
  payload.password = await AuthUtils.hashPass(password);

  // Create New User
  const newUser = await User.create(payload);

  // Generate Tokens
  const tokenPayload = { _id: newUser._id, role: newUser.role };
  const accessToken = jwtHelpers.generateToken(
    tokenPayload,
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return { ...newUser, accessToken };
};

export default signUp;