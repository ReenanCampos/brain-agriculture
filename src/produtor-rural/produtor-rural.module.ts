import { Module } from '@nestjs/common';
import { ProdutorRuralController } from './produtor-rural.controller';
import { ProdutorRuralService } from './produtor-rural.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutorRural } from './entity/produtor-rural.entity';
import { Fazenda } from 'src/fazenda/entities/fazenda.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProdutorRural]),TypeOrmModule.forFeature([Fazenda])],
    controllers: [ProdutorRuralController],
    providers: [ProdutorRuralService]
})
export class ProdutorRuralModule {}
