import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdutorRuralDto } from './dto/create-produtor-rural.dto';
import { ProdutorRural } from './entities/produtor-rural.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateProdutorRuralDto } from './dto/update-produtor-rural.dto';
import { Fazenda } from './../fazenda/entities/fazenda.entity';
import { isEmpty, isNotEmptyObject } from 'class-validator';

@Injectable()
export class ProdutorRuralService {

    constructor(
        @InjectRepository(ProdutorRural) private readonly produtorRuralRepository: Repository<ProdutorRural>,
        @InjectRepository(Fazenda) private readonly fazendaRepository: Repository<Fazenda>) {}

    public async create(createProdutorRuralDto: CreateProdutorRuralDto): Promise<ProdutorRural> {
        if(!isNotEmptyObject(createProdutorRuralDto)){
            throw new BadRequestException("Produtor não preenchido.");
        }
        const produtor: ProdutorRural = new ProdutorRural();
        produtor.nome = createProdutorRuralDto.nome;
        produtor.documento = createProdutorRuralDto.documento;
        
        if(createProdutorRuralDto.fazenda){
            const fazenda: Fazenda = new Fazenda();
            fazenda.nome = createProdutorRuralDto.fazenda.nome;
            fazenda.cidade = createProdutorRuralDto.fazenda.cidade;
            fazenda.estado = createProdutorRuralDto.fazenda.estado;
            fazenda.areaTotal = createProdutorRuralDto.fazenda.areaTotal;
            fazenda.areaAgricultavel = createProdutorRuralDto.fazenda.areaAgricultavel;
            fazenda.areaVegetacao = createProdutorRuralDto.fazenda.areaVegetacao;
            fazenda.cultura = createProdutorRuralDto.fazenda.cultura;
            produtor.fazenda = fazenda;
        }
        return await this.produtorRuralRepository.save(produtor);
    }

    async update(id: number, updateProdutorRuralDto: UpdateProdutorRuralDto): Promise<ProdutorRural> {
        if(!isNotEmptyObject(updateProdutorRuralDto)){
            throw new BadRequestException("Produtor não preenchido.");
        }
        const produtor: ProdutorRural = new ProdutorRural();
        produtor.id = id;
        produtor.nome = updateProdutorRuralDto.nome;
        produtor.documento = updateProdutorRuralDto.documento;

        const produtorDatabase = await this.produtorRuralRepository.findOne({
            relations: { fazenda: true },
            where: { id: id }
        })

        if(!produtorDatabase){
            throw new NotFoundException("Produtor não encontrado");
        }
        
        if(!updateProdutorRuralDto.fazenda && produtorDatabase.fazenda?.id){
            produtor.fazenda = null;
            this.produtorRuralRepository.save(produtor);
            this.fazendaRepository.delete(produtorDatabase.fazenda.id);
        }else{
            if(updateProdutorRuralDto.fazenda){
                const fazenda: Fazenda = new Fazenda();
                fazenda.id = produtorDatabase.fazenda?.id;
                fazenda.nome = updateProdutorRuralDto.fazenda.nome;
                fazenda.cidade = updateProdutorRuralDto.fazenda.cidade;
                fazenda.estado = updateProdutorRuralDto.fazenda.estado;
                fazenda.areaTotal = updateProdutorRuralDto.fazenda.areaTotal;
                fazenda.areaAgricultavel = updateProdutorRuralDto.fazenda.areaAgricultavel;
                fazenda.areaVegetacao = updateProdutorRuralDto.fazenda.areaVegetacao;
                fazenda.cultura = updateProdutorRuralDto.fazenda.cultura;
                produtor.fazenda = fazenda;
            }
            this.produtorRuralRepository.save(produtor);
        }
        
        return;
    }

    remove(id: number): Promise<{ affected?: number }> {
        return this.produtorRuralRepository.delete(id);
    }

    findOne(id: number): Promise<ProdutorRural> {
        let produtor;
        try{
            produtor = this.produtorRuralRepository.findOne({
                relations: { fazenda: true },
                where: { id: id }}
            );

            if(!produtor) throw new NotFoundException("Produtor não encontrado");
            
        }catch(err){
            throw new NotFoundException("Produtor não encontrado");
        }
        return produtor;
    }

    findAll(): Promise<ProdutorRural[]> {
        let produtorList;
        try{
            produtorList = this.produtorRuralRepository.find({
                relations: { fazenda: true },
            });
            if(produtorList.length < 1) throw new NotFoundException("Produtores não encontrados");
        }catch(err){
            throw new NotFoundException("Produtores não encontrados");
        }
        return produtorList;
    }

}
