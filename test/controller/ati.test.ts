import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';

describe('test/controller/ati.test.ts', () => {

  let app: Application;
  beforeAll(async () => {
    // create app
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    // close app
    await close(app);
  });

  // getBatteryEnergy
  it('should test /getBatteryEnergy with success request', async () => {
    // make request
    const result = await createHttpRequest(app).get('/getBatteryEnergy').query({ siteCode: 22000002 });

    expect(result.status).toBe(200);
    expect(result.text).toMatch(/SUCCESS/);
  });

  // it('should test /getBatteryEnergy with fail request', async () => {
  //   const result = await createHttpRequest(app).get('/getBatteryEnergy');

  //   expect(result.status).toBe(401);
  //   expect(result.text).toMatch(/failed/);
  // });

  // getDeviceInfo
  it('should test /getDeviceInfo with success request', async () => {
    // make request
    const result = await createHttpRequest(app).get('/getDeviceInfo').query({ sn: 'PHOT2023966874', siteCode: 22000002 });

    expect(result.status).toBe(200);
    expect(result.text).toMatch(/SUCCESS/);
  });

  // it('should test /getDeviceInfo with fail request', async () => {
  //   const result = await createHttpRequest(app).get('/getDeviceInfo');

  //   expect(result.status).toBe(401);
  //   expect(result.text).toMatch(/failed/);
  // });
});