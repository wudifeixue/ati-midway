/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}
// src/interface.ts

export interface BatteryEnergyInfo {
  dayChargeEnergy: number;
  monthChargeEnergy: number;
  yearChargeEnergy: number;
  allChargeEnergy: number;
  dayDisChargeEnergy: number;
  monthDisChargeEnergy: number;
  yearDisChargeEnergy: number;
  allDisChargeEnergy: number;
  batteryNum: number;
  totalCapacity: number;
  batteryStatus: number;
  soc: number;
  power: number;
  temperature: number;
  current: number;
  voltage: number;
}

export interface DeviceInfo {
  id: number;
  name: string | null;
  sn: string;
  manufacturer: string;
  siteCode: string | null;
  deviceType: number;
  delFlag: number;
  net: number;
  beforeNet: number;
  installStatus: number;
  wifiName: string | null;
  wifiPassword: string | null;
  workMode: string | null;
  gridStandards: string | null;
  connectedInverter: string | null;
  curEnergy: number;
  capacity: number;
  current: number;
  voltage: number;
  power: number;
  storeStatus: string | null;
  storeConnectStatus: number;
  pipeConnectStatus: number;
  createTime: number;
  dayChargeEnergy: number;
  monthChargeEnergy: number;
  yearChargeEnergy: number;
  allChargeEnergy: number;
  dayDisChargeEnergy: number;
  monthDisChargeEnergy: number;
  yearDisChargeEnergy: number;
  allDisChargeEnergy: number;
  periodYear: number;
  periodMonth: number;
  periodDay: number;
  dayEnergy: number;
  monthEnergy: number;
  yearEnergy: number;
  duration: string | null;
  allEnergy: number;
  startTime: number;
  energy: number;
  status: string | null;
  endTime: number;
  dayPvEnergyProduce: number;
  monthPvEnergyProduce: number;
  yearPvEnergyProduce: number;
  allPvEnergyProduce: number;
  dayGridExportEnergy: number;
  monthGridExportEnergy: number;
  yearGridExportEnergy: number;
  allGridExportEnergy: number;
  maxTemplate: string | null;
  minTemplate: string | null;
  version: string | null;
  hardVersion: string | null;
  cycles: string | null;
  pv1Current: number | null;
  pv1Power: number | null;
  pv1Voltage: number | null;
  pv2Current: number | null;
  pv2Power: number | null;
  pv2Voltage: number | null;
  pv3Current: number | null;
  pv3Power: number | null;
  pv3Voltage: number | null;
  pv4Current: number | null;
  pv4Power: number | null;
  pv4Voltage: number | null;
  workModeList: string[];
  gridMidPeak: string | null;
  gridOffPeak: string | null;
  gridOnPeak: string | null;
  pvCapacity: number;
  inverterEntity: any;
  installation: number;
  extInfo: string;
  export: boolean;
  gridEntity: any;
  loadEntity: any;
  pvEntity: {
    pv1Voltage: number;
    pv1Current: number;
    pv1Power: number;
    pv2Voltage: number;
    pv2Current: number;
    pv2Power: number;
    pv3Voltage: number;
    pv3Current: number;
    pv3Power: number;
    pv4Voltage: number;
    pv4Current: number;
    pv4Power: number;
  };
  pileEntity: any;
  soc: number | null;
  soh: number | null;
}
