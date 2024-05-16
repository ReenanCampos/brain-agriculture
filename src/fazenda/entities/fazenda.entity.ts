
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Culturas {
    SOJA = "Soja",
    MILHO = "Milho",
    ALGODAO = "Algodão",
    CAFE = "Café",
    CANA_DE_ACUCAR = "Cana de Açucar"
}

@Entity()
export class Fazenda {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 80 })
    nome: string;

    @Column({ type: 'varchar', length: 80 })
    cidade: string;

    @Column({ type: 'varchar', length: 80 })
    estado: string;

    @Column({ type: 'int'})
    areaTotal: number;

    @Column({ type: 'int'})
    areaAgricultavel: number;

    @Column({ type: 'int'})
    areaVegetacao: number;

    @Column({ type: 'enum', array: true, enum: Culturas})
    cultura: Culturas[]

}