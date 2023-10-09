// src/error/ati.error.ts
import { MidwayError } from '@midwayjs/core';

export class AtiEmptyDataError extends MidwayError {
  constructor(err?: Error) {
    super('Ati data is empty', {
      cause: err,
    });
    if (err?.stack) {
      this.stack = err.stack;
    }
  }
}