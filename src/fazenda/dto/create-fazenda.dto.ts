import { PartialType } from "@nestjs/swagger";
import { FazendaDto } from "./fazenda.dto";

export class CreateFazendaDto extends PartialType(FazendaDto) { }
