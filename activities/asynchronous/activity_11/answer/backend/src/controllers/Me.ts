import { Context } from 'koa';
import { MeModel } from '../models/Me';

class MeController {
  private static model = new MeModel();

  public static get(ctx: Context) {
    const me = MeController.model.get();

    ctx.body = { data: me };
    ctx.status = me ? 200 : 204;
  }
}

export { MeController };
