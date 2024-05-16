import { Type } from "class-transformer";
import { IsEnum, IsInt, IsNotEmpty, IsPositive, IsString, MinLength, ValidateNested } from "class-validator";
import { IntegerType } from "typeorm";

export enum Culturas {
    SOJA = "Soja",
    MILHO = "Milho",
    ALGODAO = "Algodão",
    CAFE = "Café",
    CANA_DE_ACUCAR = "Cana de Açucar"
}

export class FazendaDto {

    @IsString()
    @MinLength(3, { message: 'Nome precisa ter pelo menos 3 caracteres minimo.' })
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    cidade: string;

    @IsString()
    @IsNotEmpty()
    estado: string;

    @IsInt()
    @IsPositive()
    areaTotal: number;

    @IsInt()
    @IsPositive()
    areaAgricultavel: number;

    @IsInt()
    @IsPositive()
    areaVegetacao: number;

    @IsEnum(Culturas, {each: true})
    cultura: Culturas[]

}