import express, { Router } from 'express';
import AuthRoutes from './modules/auth/auth.route';

const router: Router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));

export default router;