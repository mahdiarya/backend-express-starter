import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../libs/shared/catchAsync';
import sendResponse from '../../libs/shared/sendResponse';
import { Service } from './auth.service';

const signup: RequestHandler = catchAsync(async(req, res) => {

  const result = await Service.signup(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Signed Up successfully',
    data: result,
  });
});

const login: RequestHandler = catchAsync(async(req, res) => {

  const result = await Service.login(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Loged In successfully',
    data: result,
  });
});

export const Controller = { signup, login };