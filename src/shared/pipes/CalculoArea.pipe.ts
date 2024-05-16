import { PipeTransform, Injectable, ArgumentMetadata, HttpException } from '@nestjs/common';
import { FazendaDto } from 'src/fazenda/dto/fazenda.dto';
import { ProdutorDto } from 'src/produtor-rural/dto/produtor.dto';

@Injectable()
export class CalculoAreaPipe implements PipeTransform {
    transform(value: ProdutorDto , metadata: ArgumentMetadata) {

        if(!value.fazenda) 
            return value;

        if((value.fazenda.areaAgricultavel + value.fazenda.areaVegetacao) > value.fazenda.areaTotal)
            throw new HttpException("Área agricultavel e de vegatacao são maiores que a área total" , 400)

        return value;
    }
}