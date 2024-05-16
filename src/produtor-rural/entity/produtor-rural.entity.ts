import { Fazenda } from 'src/fazenda/entities/fazenda.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProdutorRural {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 80 })
    nome: string;

    @Column({ type: 'varchar', length: 14 })
    documento: string;
    
    @OneToOne(() => Fazenda, {cascade: true })
    @JoinColumn()
    fazenda: Fazenda;
}