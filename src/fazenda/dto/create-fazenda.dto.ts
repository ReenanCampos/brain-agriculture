import { PartialType } from "@nestjs/mapped-types";
import { FazendaDto } from "./fazenda.dto";

export class CreateFazendaDto extends PartialType(FazendaDto) { }
