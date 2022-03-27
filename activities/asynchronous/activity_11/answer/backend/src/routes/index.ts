import Router from 'koa-router';

import { MeRoutes } from './modules/Me';
import { SectionItemsRoutes } from './modules/SectionItems';
import { SectionsRoutes } from './modules/Sections';

const router: Router = new Router({
  prefix: '/portfolio',
});

router.use(MeRoutes);
router.use(SectionsRoutes);
router.use(SectionItemsRoutes);

export { router };
