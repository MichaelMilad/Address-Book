import { Router, Request, Response } from 'express';
const router: Router = Router();
import * as contacts from '../controllers/contacts';
import getToken from '../controllers/jwt';
import verifyToken from '../middlewares/verifyToken';

router.get('/', (_req: Request, res: Response) => {
  res.json({
    message: '/api'
  });
});

router
  .route('/contacts')
  .post(verifyToken, contacts.create)
  .get(verifyToken, contacts.index);

router
  .route('/contacts/:id')
  .get(verifyToken, contacts.showOne)
  .delete(verifyToken, contacts.deleteOne)
  .put(verifyToken, contacts.updateOne);

router.route('/gettoken').get(getToken);

export default router;
