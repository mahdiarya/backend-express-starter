import express from 'express';
import { Controller } from './auth.handler';
import validator from '../../libs/middlewares/validate.request';
import { Validate } from './domain/v1/validate';

const router = express.Router();

router.post(
  '/signup',
  validator(Validate.signup),
  Controller.signup
);

router.post(
  '/login',
  validator(Validate.login),
  Controller.login
);

export const AuthRoutes = router;