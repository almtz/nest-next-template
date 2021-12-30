import { Module } from '@nestjs/common';

import { ViewModule } from './view/view.module';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ApiModule, ViewModule],
})
export class AppModule {}
