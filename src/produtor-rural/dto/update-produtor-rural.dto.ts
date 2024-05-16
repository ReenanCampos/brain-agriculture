
import { PartialType } from "@nestjs/swagger";
import { ProdutorDto } from "./produtor.dto"

export class UpdateProdutorRuralDto extends PartialType(ProdutorDto){}
