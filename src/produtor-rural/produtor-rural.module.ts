import { Module } from '@nestjs/common';
import { ProdutorRuralController } from './produtor-rural.controller';
import { ProdutorRuralService } from './produtor-rural.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutorRural } from './entities/produtor-rural.entity';
import { Fazenda } from '../fazenda/entities/fazenda.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProdutorRural]),TypeOrmModule.forFeature([Fazenda])],
    controllers: [ProdutorRuralController],
    providers: [ProdutorRuralService]
})
export class ProdutorRuralModule {}
