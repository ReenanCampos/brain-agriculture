import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { ProdutorRural } from 'src/produtor-rural/entity/produtor-rural.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fazenda } from 'src/fazenda/entities/fazenda.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutorRural]),TypeOrmModule.forFeature([Fazenda])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
