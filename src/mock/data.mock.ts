// src/mock/data.mock.ts
import {
    Mock,
    ISimulation,
    App,
    Inject,
    IMidwayApplication,
    MidwayMockService,
  } from '@midwayjs/core';
  import { AtiService } from '../service/ati.service';

  @Mock()
  export class BatteryDataMock implements ISimulation {
    @App()
    app: IMidwayApplication;
  
    @Inject()
    mockService: MidwayMockService;
  
    async setup(): Promise<void> {
      // Mock getBatteryEnergy
      const originBatteryEnergyMethod = AtiService.prototype.getBatteryEnergy;
      this.mockService.mockClassProperty(
        AtiService,
        'getBatteryEnergy',
        async siteCode => {
          if (siteCode === '22000002') {
            return {
              code: 200,
              msg: "SUCCESS",
              data: {
                dayChargeEnergy: 1.94,
                monthChargeEnergy: 46.55,
                yearChargeEnergy: 58.52,
                allChargeEnergy: 196.78,
                dayDisChargeEnergy: 0.22,
                monthDisChargeEnergy: 30.42,
                yearDisChargeEnergy: 31.01,
                allDisChargeEnergy: 68.54,
                batteryNum: 1,
                totalCapacity: 10.0,
                batteryStatus: 2,
                soc: 99.0,
                power: 0.23,
                temperature: 16.0,
                current: 4.2,
                voltage: 54.6
              },
            };
          } else {
            return originBatteryEnergyMethod.apply(this, [siteCode]);
          }
        }
      );
    }
  
    enableCondition(): boolean | Promise<boolean> {
      // 模拟类启用的条件
      return ['local', 'test', 'unittest'].includes(this.app.getEnv());
    }
  }
  
  @Mock()
  export class DeviceInfoMock implements ISimulation {
    @App()
    app: IMidwayApplication;
  
    @Inject()
    mockService: MidwayMockService;
  
    async setup(): Promise<void> {
      const originDeviceInfoMethod = AtiService.prototype.getDeviceInfo;
      this.mockService.mockClassProperty(
        AtiService,
        'getDeviceInfo',
        async (sn, siteCode) => {
          if (sn === 'PHOT2023966874' && siteCode === '22000002') {
            return {
              code: 200,
              msg: "SUCCESS",
              data: {
                id: 1351,
                name: null,
                sn: "PHOT2023966874",
                manufacturer: "",
                siteCode: null,
                deviceType: 0,
                delFlag: 0,
                net: 0,
                beforeNet: 0,
                installStatus: 0,
                wifiName: null,
                wifiPassword: null,
                workMode: null,
                gridStandards: null,
                connectedInverter: null,
                curEnergy: 0.0,
                capacity: 0.0,
                current: 0.0,
                voltage: 0.0,
                power: 0.0,
                storeStatus: null,
                storeConnectStatus: 0,
                pipeConnectStatus: 0,
                createTime: 1694298,
                dayChargeEnergy: 0.0,
                monthChargeEnergy: 0.0,
                yearChargeEnergy: 0.0,
                allChargeEnergy: 0.0,
                dayDisChargeEnergy: 0.0,
                monthDisChargeEnergy: 0.0,
                yearDisChargeEnergy: 0.0,
                allDisChargeEnergy: 0.0,
                periodYear: 0,
                periodMonth: 1,
                periodDay: 0,
                dayEnergy: 0.0,
                monthEnergy: 0.0,
                yearEnergy: 0.0,
                duration: null,
                allEnergy: 0.0,
                startTime: 0,
                energy: 0.0,
                status: null,
                endTime: 0,
                dayPvEnergyProduce: 7.63,
                monthPvEnergyProduce: 86.18,
                yearPvEnergyProduce: 100.04,
                allPvEnergyProduce: 372.17,
                dayGridExportEnergy: 0.0,
                monthGridExportEnergy: 0.0,
                yearGridExportEnergy: 0.0,
                allGridExportEnergy: 0.0,
                maxTemplate: null,
                minTemplate: null,
                version: null,
                hardVersion: null,
                cycles: null,
                pv1Current: null,
                pv1Power: null,
                pv1Voltage: null,
                pv2Current: null,
                pv2Power: null,
                pv2Voltage: null,
                pv3Current: null,
                pv3Power: null,
                pv3Voltage: null,
                pv4Current: null,
                pv4Power: null,
                pv4Voltage: null,
                workModeList: [
                  "Self Consume",
                  "Peak Shift",
                  "Battery Priority",
                  "Off-Grid"
                ],
                gridMidPeak: null,
                gridOffPeak: null,
                gridOnPeak: null,
                pvCapacity: 6.3,
                inverterEntity: null,
                installation: 1,
                extInfo: "{\"pv1Power\": 0.58, \"pv2Power\": 0.58, \"pv3Power\": 0.0, \"pv4Power\": 0.0, \"pv1Current\": 2.2, \"pv1Voltage\": 253.3, \"pv2Current\": 2.2, \"pv2Voltage\": 256.0, \"pv3Current\": 0.0, \"pv3Voltage\": 63.1, \"pv4Current\": 0.0, \"pv4Voltage\": 31.3}",
                export: true,
                gridEntity: null,
                loadEntity: null,
                pvEntity: {
                  pv1Voltage: 253.3,
                  pv1Current: 2.2,
                  pv1Power: 0.58,
                  pv2Voltage: 256.0,
                  pv2Current: 2.2,
                  pv2Power: 0.58,
                  pv3Voltage: 63.1,
                  pv3Current: 0.0,
                  pv3Power: 0.0,
                  pv4Voltage: 31.3,
                  pv4Current: 0.0,
                  pv4Power: 0.0
                },
                pileEntity: null,
                soc: null,
                soh: null
              }
            };
          } else {
            return originDeviceInfoMethod.apply(this, arguments);
          }
        }
      );
    }
  
    enableCondition(): boolean | Promise<boolean> {
      // 模拟类启用的条件
      return ['local', 'test', 'unittest'].includes(this.app.getEnv());
    }
  }