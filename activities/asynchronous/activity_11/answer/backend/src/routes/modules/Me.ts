import Router from 'koa-router';
import { MeController } from 'src/controllers/Me';

const router: Router = new Router({
  prefix: '/me',
});

router.get('/', MeController.get);

export const MeRoutes = router.routes();
