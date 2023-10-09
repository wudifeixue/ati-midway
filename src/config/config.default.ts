import { MidwayConfig } from '@midwayjs/core';
import { Photo } from '../entity/photo.entity';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1696817930591_9602',
  koa: {
    port: 7001,
  },
  view: {
    defaultViewEngine: 'nunjucks',
  },
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '321ewqdsacxz',
        database: 'test',
        synchronize: false,     // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: false,

        // 配置实体模型
        entities: [Photo],
      }
    }
  },
} as MidwayConfig;
