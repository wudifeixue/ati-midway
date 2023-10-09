import { Controller, Get, Post, Body, Inject, Query } from '@midwayjs/core';
import { BatteryEnergyInfo, DeviceInfo } from '../interface';
import { AtiService } from '../service/ati.service';

@Controller('/')
export class AtiController {

  @Inject()
  atiService: AtiService;

  @Get('/getBatteryEnergy')
  async getAtiInfo(@Query('siteCode') siteCode: string): Promise<BatteryEnergyInfo> {
    return this.atiService.getBatteryEnergy(siteCode);
  }

  @Get('/getDeviceInfo')
  async getDeviceInfo(@Query('sn') sn: string, @Query('siteCode') siteCode: string): Promise<DeviceInfo> {  // 假设你的DeviceInfo也使用AtiInfo接口
    return this.atiService.getDeviceInfo(sn, siteCode);
  }

  @Post('/postWorkMode')
  async setWorkMode(@Body() requestBody: { siteCode: string, workMode: string }): Promise<any> {
    return this.atiService.setWorkMode(requestBody.siteCode, requestBody.workMode);
  }
}