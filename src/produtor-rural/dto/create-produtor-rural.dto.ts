import { PartialType } from "@nestjs/mapped-types";
import { ProdutorDto } from "./produtor.dto";

export class CreateProdutorRuralDto extends PartialType(ProdutorDto) { }
