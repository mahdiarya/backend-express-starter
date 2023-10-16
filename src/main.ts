import express from 'express';
import AppModule from './app.module';

function bootstrap() {
  const app = express();

  app.use(AppModule)

  app.listen(3000, () => {
    console.log('error on listen port 3000')
  });
}
bootstrap();