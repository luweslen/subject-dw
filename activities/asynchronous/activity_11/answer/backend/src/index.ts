import Koa, { Context } from 'koa';
import BodyParser from 'koa-bodyparser';
import Cors from '@koa/cors';
import { router } from './routes';

const server = new Koa();

server.use(BodyParser());
server.use(Cors());

server.use(router.routes());

server.listen(3333, () => console.log('SERVER STARTED'));
