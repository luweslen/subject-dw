import Router from 'koa-router';
import { SectionsController } from 'src/controllers/Sections';

const router: Router = new Router({
  prefix: '/sections',
});

router.get('/:id', SectionsController.get);

router.get('/', SectionsController.getAll);

export const SectionsRoutes = router.routes();
