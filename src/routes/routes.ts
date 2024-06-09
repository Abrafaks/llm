import express, { Request, Response, Router } from 'express';
import summarizeRoutes from './summarize.routes';

const router: Router = express.Router();

router.use('/summarize', summarizeRoutes);
router.use('*', (req: Request, res: Response) => {
  res.status(404).send('Page not found.');
});

export default router;
