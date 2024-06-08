import express, { Request, Response, Router } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from '../config/swagger';
import summarizeRoutes from './summarize.routes';

const router: Router = express.Router();
const swaggerSpec = swaggerJSDoc(swaggerOptions);

router.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
router.use('/summarize', summarizeRoutes);
router.use('*', (req: Request, res: Response) => {
  res.status(404).send('Page not found.');
});

export default router;
