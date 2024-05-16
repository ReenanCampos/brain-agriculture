import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProdutorRural } from '../produtor-rural/entities/produtor-rural.entity';
import { Fazenda } from '../fazenda/entities/fazenda.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutorRural]),TypeOrmModule.forFeature([Fazenda])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
