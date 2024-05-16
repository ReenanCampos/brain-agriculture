import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutorRuralModule } from './produtor-rural/produtor-rural.module';
import { ProdutorRural } from './produtor-rural/entity/produtor-rural.entity';
import { FazendaModule } from './fazenda/fazenda.module';
import { Fazenda } from './fazenda/entities/fazenda.entity';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'root',
      username: 'postgres',
      entities: [ProdutorRural, Fazenda],
      database: 'brain-agriculture',
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
