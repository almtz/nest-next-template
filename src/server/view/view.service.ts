import { Injectable, OnModuleInit } from '@nestjs/common';

import next from 'next';
import { NextServer } from 'next/dist/server/next';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';

@Injectable()
export class ViewService implements OnModuleInit {
  private server: NextServer;

  constructor(private config: ConfigService) {}

  async onModuleInit() {
    try {
      this.server = next({
        dev: this.config.get<string>('NODE_ENV') !== 'production',
        dir: './src/client',
      });
      await this.server.prepare();
    } catch (e) {
      console.log(e);
    }
  }

  handler(req: Request, res: Response) {
    return this.server.getRequestHandler()(req, res);
  }
}
