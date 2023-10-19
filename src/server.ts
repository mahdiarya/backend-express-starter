import { Server } from 'http';
import express from 'express';
import mongoose from 'mongoose';
import config from './configs/app.config';
import AppModule from './app.route.v1';

async function bootstrap() {
  mongoose
  .connect(config.database_url as string)
  .then(() => console.log('Database connceted successfully ✅'))
  .catch(err => console.log(`Unable to connect MongoDB ❌ ${err}`));

  const app = express();

  app.use(AppModule)

  app.listen(3000, () => {
    console.log('error on listen port 3000')
  });

  const server: Server = app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log('Server closed');
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error: unknown) => {
    console.log(error);
    exitHandler();
  };

  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);

  process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    if (server) {
      server.close();
    }
  });
}

bootstrap();