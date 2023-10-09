import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import { AtiErrorFilter } from './filter/ati.filter';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';
import * as axios from '@midwayjs/axios';

@Configuration({
  imports: [
    koa,
    validate,
    axios,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application;

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    this.app.useFilter([AtiErrorFilter]);
  }
}

