import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutorRuralModule } from './produtor-rural/produtor-rural.module';
import { ProdutorRural } from './produtor-rural/entities/produtor-rural.entity';
import { FazendaModule } from './fazenda/fazenda.module';
import { Fazenda } from './fazenda/entities/fazenda.entity';
import { DashboardModule } from './dashboard/dashboard.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 5432),
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'root',
      database: process.env.DATABASE_NAME,
      entities: [ProdutorRural, Fazenda],
      synchronize: true,
      logging: true,
    }),
    ProdutorRuralModule,
    FazendaModule,
    DashboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
