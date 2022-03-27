import { Context } from 'koa';
import { SectionModel } from '../models/Section';

class SectionsController {
  private static model = new SectionModel();

  public static get(ctx: Context) {
    const id = ctx.params.id as string;

    const hasItems = ctx.query.hasItems as string;

    const params = {
      id,
      hasItems: false,
    };

    if (hasItems) {
      params.hasItems = hasItems === 'true';
    }

    const section = SectionsController.model.get(params);

    ctx.body = { data: section };
    ctx.status = section ? 200 : 204;
  }

  public static getAll(ctx: Context) {
    const hasItems = ctx.query.hasItems as string;

    const params = {
      hasItems: false,
    };

    if (hasItems) {
      params.hasItems = hasItems === 'true';
    }

    const sections = SectionsController.model.getAll(params);

    ctx.body = { data: sections };
    ctx.status = sections.length > 0 ? 200 : 204;
  }
}

export { SectionsController };
