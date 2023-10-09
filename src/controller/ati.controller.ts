import { Controller, Get } from '@midwayjs/core';

@Controller('/')
export class AtiController {
  // 这里是装饰器，定义一个路由
  @Get('/ati')
  async getWeatherInfo(): Promise<string> {
    // 这里是 http 的返回，可以直接返回字符串，数字，JSON，Buffer 等
    return 'Hello ATI!';
  }
}