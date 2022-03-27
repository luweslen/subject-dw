import { Context } from 'koa';
import { SectionItemModel } from '../models/SectionItem';

class SectionItemsController {
  private static model = new SectionItemModel();

  public static get(ctx: Context) {
    const id = ctx.params.id as string;

    const item = SectionItemsController.model.get(id);

    ctx.body = { data: item };
    ctx.status = item ? 200 : 204;
  }

  public static getAll(ctx: Context) {
    const sectionId = ctx.query.sectionId as string;

    const params = {
      sectionId: '',
    };

    if (sectionId) {
      params.sectionId = sectionId;
    }

    const items = SectionItemsController.model.getAll(params);

    ctx.body = { data: items };
    ctx.status = items.length > 0 ? 200 : 204;
  }
}

export { SectionItemsController };
