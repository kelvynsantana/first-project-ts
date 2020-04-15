import { Router } from 'express';

const routes = Router();

/** Insert your routes here */
routes.get('/', (request, response) =>
  response.json({ message: 'Hello Double Peppers' }),
);

export default routes;
