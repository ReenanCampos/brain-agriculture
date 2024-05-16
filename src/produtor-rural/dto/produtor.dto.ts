import { Type } from "class-transformer";
import { IsNotEmpty, IsString, MinLength, Matches, IsObject, IsNotEmptyObject, ValidateNested } from "class-validator";
import { FazendaDto } from "../../fazenda/dto/fazenda.dto";
import { ApiProperty } from "@nestjs/swagger";

const cpfCnpjRegEx = 
    /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

export class ProdutorDto {
    
    @IsString()
    @MinLength(3, { message: 'Nome precisa ter pelo menos 3 caracteres minimo.' })
    @IsNotEmpty()
    @ApiProperty()
    nome: string;

    @IsNotEmpty()
    @Matches(cpfCnpjRegEx, {
        message: `Forneça um CPF/CPNJ em formato válido.
        CPF
        12345678912
        123456789-12
        123.456.789-12
        
        CPNJ
        12345678912345
        123456789-21
        12345678/9123-45
        12.345.678/9123-45
        `,
    })
    @ApiProperty()
    documento: string;

    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested({ each: true })
    @Type(() => FazendaDto)
    @ApiProperty()
    fazenda: FazendaDto;

}