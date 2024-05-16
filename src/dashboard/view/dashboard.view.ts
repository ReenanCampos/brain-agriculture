import { ApiProperty } from "@nestjs/swagger";


export class DashboardView{

    totalFazendasQuantidade: number;

    totalFazendasHA: number;

    pizzaEstado: object[];

    pizzaCultura: object[];

    pizzaSolo: object[]

}