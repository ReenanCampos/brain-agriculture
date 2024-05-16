
import { ProdutorDto } from "./produtor.dto";
import { PartialType } from "@nestjs/swagger";
export class CreateProdutorRuralDto extends PartialType(ProdutorDto) { }
