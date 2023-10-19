import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import { ILogin } from '@/auth/domain/v1/dto';
import config from '@/configs/app.config';
import { User } from '@/shared/user/user.entity';
import ApiError from '@/libs/errors/api.error';
import { AuthUtils } from '@/libs/helpers/hash.helper';
import { jwtHelpers } from '@/libs/helpers/jwt.helper';


const signIn = async (payload: ILogin) => {
  const { email, password } = payload;

  // Check User Exist
  const userExist = await User.findOne({ email }).lean();
  if (!userExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User account not found');
  }

  // Check Password
  if (!(await AuthUtils.passMatched(password, userExist.password))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User credentials is wrong');
  }

  // Generate Tokens
  const tokenPayload = { _id: userExist._id, role: userExist.role };
  const accessToken = jwtHelpers.generateToken(
    tokenPayload,
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return { ...userExist, accessToken };
};

export default signIn;