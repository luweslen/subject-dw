import Router from 'koa-router';
import { SectionItemsController } from 'src/controllers/SectionItems';

const router: Router = new Router({
  prefix: '/section-items',
});

router.get('/:id', SectionItemsController.get);

router.get('/', SectionItemsController.getAll);

export const SectionItemsRoutes = router.routes();
