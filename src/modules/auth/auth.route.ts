import express, { Router } from 'express';
import validator from '../../libs/middlewares/validate.request';
import { login, signup } from './auth.handler';
import { Validate } from './domain/v1/validate';

const router: Router = express.Router();

router.post(
  '/signup',
  validator(Validate.signup),
  signup
);

router.post(
  '/login',
  validator(Validate.login),
  login
);

export default router;