// src/service/ati.service.ts
import { Provide } from '@midwayjs/core';
import { BatteryEnergyInfo, DeviceInfo } from '../interface';
import { AtiEmptyDataError } from '../error/ati.error';
import { axios } from '@midwayjs/axios';

const COMMON_HEADERS = { 
  'Accept': 'application/json, text/plain, */*', 
  'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7', 
  'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImEzNWJjMzM3LTI1MDQtNDUzNS1hOTgzLWVmZjUzOTFjM2E4ZSJ9.MZ5K_t-doBeMgTjBSuVps0s6QptrtgYrzP7SxGtZEy5R5WNZYB1aTJJv7hbtP11G04fTrGK3BsBTSKvOXnSNIA', 
  'Connection': 'keep-alive', 
  'Origin': 'http://ems11.ati-watt.com', 
  'Referer': 'http://ems11.ati-watt.com/', 
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
}

@Provide()
export class AtiService {
  // 获取电池信息
  async getBatteryEnergy(siteCode: string): Promise<BatteryEnergyInfo> {
    if (!siteCode) {
      throw new AtiEmptyDataError();
    }

    const config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: `http://ems11api.ati-watt.com/device/batteryEnergy?siteCode=${siteCode}`,
      headers: COMMON_HEADERS,
    };

    try {
      const response = await axios.request(config);
      if (response.status === 200) {
        return response.data as BatteryEnergyInfo;
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      throw new AtiEmptyDataError(error);
    }
  }

  // 获取设备信息包含PV
  async getDeviceInfo(sn: string, siteCode: string): Promise<DeviceInfo> {
    if (!sn || !siteCode) {
      throw new AtiEmptyDataError();
    }

    const config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: `http://ems11api.ati-watt.com/device/info?sn=${sn}&siteCode=${siteCode}`,
      headers: COMMON_HEADERS,
    };

    try {
      const response = await axios.request(config);
      if (response.status === 200) {
        return response.data as DeviceInfo;
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      throw new AtiEmptyDataError(error);
    }
  }

  // 设置工作模式
  async setWorkMode(siteCode: string, workMode: string): Promise<any> {
    if (!siteCode || !workMode) {
      throw new AtiEmptyDataError();
    }
  
    const config = {
      method: 'post',
      url: 'http://ems11api.ati-watt.com/device/setting',
      headers: {
        ...COMMON_HEADERS,
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        siteCode,
        type: 0,  // 此处固定为0
        baseParam: workMode  // 使用传入的workMode
      }
    };

    try {
      const response = await axios.request(config);
      return response.data; // 根据需要，可以进一步处理这里的返回值
    } catch (error) {
      throw new AtiEmptyDataError(error);
    }
  }

  // 设置电网类型
  async setGridType(siteCode: string, gridType: string): Promise<any> {
    if (!siteCode || !gridType) {
      throw new AtiEmptyDataError();
    }
  
    const config = {
      method: 'post',
      url: 'http://ems11api.ati-watt.com/device/setting',
      headers: {
        ...COMMON_HEADERS,
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        siteCode,
        type: 19,  // 此处固定为19
        baseParam: gridType  // 使用传入的gridType
      }
    };
  
    try {
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      throw new AtiEmptyDataError(error);
    }
  }
}