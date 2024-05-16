import { FazendaDto } from "../../fazenda/dto/fazenda.dto";
import { CreateProdutorRuralDto } from "../dto/create-produtor-rural.dto";
import { ProdutorDto } from "../dto/produtor.dto";
import { ProdutorRural } from "../entities/produtor-rural.entity";


export function mockCaseCreate(){
    const produtoresMockCaseCreate = [
        {
            id: 1,
            nome:"José Carlos",
            documento: "32760989000128",
            fazenda:{ nome: "Lago Cheio", cidade: "Vitoria", estado: "ES", areaTotal: 10, areaAgricultavel: 5, areaVegetacao: 5, cultura:[ "Milho", "Soja" ] }
        },
        {
            id: 2,
            nome:"Davi Lucas",
            documento: "416.819.289-06",
            fazenda:{ nome: "Iracema", cidade: "Curitiba", estado: "PR", areaTotal: 10, areaAgricultavel: 5, areaVegetacao: 5, cultura:[ "Aldogão", "Milho" ] }
        },
        {
            id: 3,
            nome:"Ana Liz",
            documento: "79.869.747/0001-30",
            fazenda:{ nome: "Água Doce", cidade: "Milagres", estado: "BA", areaTotal: 10, areaAgricultavel: 5, areaVegetacao: 5, cultura:[ "Aldogão", "Café" ] }
        },
        {
            id: 4,
            nome:"Maria Vitória",
            documento: "13551112002"
        },
        {
            id: 5,
            nome:"Arthur Gabriel",
            documento: "168696880001-80",
            fazenda:{ nome: "Iracema", cidade: "Novo Triunfo", estado: "BA", areaTotal: 10, areaAgricultavel: 5, areaVegetacao: 5, cultura:[ "Cana de Açucar", "Soja", "Milho" ] }
        },
        {
            id: 6,
            nome:"Vitor Hugo",
            documento: "61731359/0001-23",
            fazenda:{ nome: "Iracema", cidade: "Reserva do Iguaçu", estado: "PR", areaTotal: 10, areaAgricultavel: 5, areaVegetacao: 5, cultura:[ "Café" ] }
        }
    ];
    return convertJsonToDto(produtoresMockCaseCreate);
}

function convertJsonToDto(list){

    return list.map(conteudo => {
        let novoProdutorRural = new ProdutorDto();
        novoProdutorRural.nome = conteudo.nome;
        novoProdutorRural.documento = conteudo.documento;
        if(conteudo.fazenda){
            let novaFazenda = new FazendaDto();
            novaFazenda.nome = conteudo.nome;
            novaFazenda.cidade = conteudo.fazenda.cidade;
            novaFazenda.estado = conteudo.fazenda.estado;
            novaFazenda.areaTotal = conteudo.fazenda.areaTotal;
            novaFazenda.areaAgricultavel = conteudo.fazenda.areaAgricultavel;
            novaFazenda.areaVegetacao = conteudo.fazenda.areaVegetacao;
            novaFazenda.cultura = conteudo.fazenda.cultura;
            novoProdutorRural.fazenda = novaFazenda;
        }
        return novoProdutorRural;
    })

}