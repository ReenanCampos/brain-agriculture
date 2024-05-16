import { ApiProperty } from "@nestjs/swagger";
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
    @ApiProperty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    cidade: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    estado: string;

    @IsInt()
    @IsPositive()
    @ApiProperty()
    areaTotal: number;

    @IsInt()
    @IsPositive()
    @ApiProperty()
    areaAgricultavel: number;

    @IsInt()
    @IsPositive()
    @ApiProperty()
    areaVegetacao: number;

    @IsEnum(Culturas, {each: true})
    @ApiProperty()
    cultura: Culturas[]

}