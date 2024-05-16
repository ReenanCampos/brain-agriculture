import { 
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Patch,
    ParseIntPipe,
    ValidationPipe
} from '@nestjs/common';

import { CalculoAreaPipe } from 'src/shared/pipes/CalculoArea.pipe';

import { ProdutorRuralService } from './produtor-rural.service';

import { CreateProdutorRuralDto } from './dto/create-produtor-rural.dto';
import { UpdateProdutorRuralDto } from './dto/update-produtor-rural.dto';

@Controller('produtor-rural')
export class ProdutorRuralController {

    constructor(private readonly produtorRuralService: ProdutorRuralService) {}

    @Post()
    create(@Body(ValidationPipe, CalculoAreaPipe) createProdutorRuralDto: CreateProdutorRuralDto){
        return this.produtorRuralService.create(createProdutorRuralDto);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe, CalculoAreaPipe) updateProdutorRuralDto: UpdateProdutorRuralDto) {
        return this.produtorRuralService.update(+id, updateProdutorRuralDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.produtorRuralService.remove(+id);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.produtorRuralService.findOne(+id);
    }

    @Get()
    findAll() {
        return this.produtorRuralService.findAll();
    }
    
}

