import { Module } from '@nestjs/common';
import { FazendaService } from './fazenda.service';
import { FazendaController } from './fazenda.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fazenda } from './entities/fazenda.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Fazenda])],
    controllers: [FazendaController],
    providers: [FazendaService],
})
export class FazendaModule {}
