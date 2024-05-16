import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutorRural } from '../produtor-rural/entities/produtor-rural.entity';
import { Fazenda } from '../fazenda/entities/fazenda.entity';
import { Repository } from 'typeorm';
import { DashboardView } from './view/dashboard.view';

@Injectable()
export class DashboardService {
    constructor(
        @InjectRepository(ProdutorRural) private readonly produtorRuralRepository: Repository<ProdutorRural>,
        @InjectRepository(Fazenda) private readonly fazendaRepository: Repository<Fazenda>) {}


    async dashboard() {

        let dashboard: DashboardView = new DashboardView();

        const produtorList = await this.produtorRuralRepository.find({
            relations: { fazenda: true },
        });

        const fazendas = produtorList
            .filter( produtor => produtor.fazenda != null)
            .map(produtor => produtor.fazenda);
        
        dashboard.totalFazendasQuantidade = fazendas.length;
        dashboard.totalFazendasHA = fazendas.reduce((soma, fazendaAtual) => soma + fazendaAtual.areaTotal, 0)
        dashboard.pizzaEstado = [
            ...fazendas
                .reduce((r, e) => {
                    if (!r.has(e.estado)) r.set(e.estado, { estado: e.estado, total: 1 })
                    else r.get(e.estado).total++
                    return r
                }, new Map())
                .values(),
        ];
        dashboard.pizzaCultura = [
            ...fazendas
                .reduce((r, e) => {
                    let culturaArray = e.cultura;
                    culturaArray.forEach(function(cultura){
                        if (!r.has(cultura)) r.set(cultura, { cultura: cultura, total: 1 })
                        else r.get(cultura).total++
                    });
                    return r
                }, new Map())
                .values(),
        ];
        dashboard.pizzaSolo = [
            ...fazendas
                .reduce((r, e) => {
                    if(!r.has("agricultavel")){
                        r.set("agricultavel", { tipoSolo: "Area Agricultável", total: e.areaAgricultavel})
                        r.set("vegetacao", { tipoSolo: "Area de Vegetacao", total: e.areaVegetacao})
                    }
                    else{
                        r.set("agricultavel", { tipoSolo: "Area Agricultável", total: r.get("agricultavel").total + e.areaAgricultavel})
                        r.set("vegetacao", { tipoSolo: "Area de Vegetacao", total: r.get("vegetacao").total + e.areaVegetacao})
                    }
                    return r
                }, new Map())
                .values(),
        ];

        return dashboard;
    }
}
