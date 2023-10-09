//src/filter/ati.filter.ts
import { Catch } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { AtiEmptyDataError } from '../error/ati.error';

@Catch(AtiEmptyDataError)
export class AtiErrorFilter {
  async catch(err: AtiEmptyDataError, ctx: Context) {
    ctx.logger.error(err);
    return '<html><body><h1>ATI data is empty</h1></body></html>';
  }
}