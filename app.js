import 'dotenv/config';
import express from 'express';
import testRoute from './src/routes/test.route.js';
import authRoute from './src/routes/auth.route.js';

const app = express();
app.use(express.json());
app.use(testRoute);
app.use(authRoute);

const port = Number(process.env.APP_PORT);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('APP_PORT debe ser un puerto entero entre 1 y 65535.');
}



app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});