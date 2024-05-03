import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";


@Entity({name: "tb_produtos"})
export class Produto{

    @PrimaryGeneratedColumn() // Chave Primária e Auto_Increment
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({type: 'decimal', precision:10, scale: 2, nullable: false})
    preco: number;

    @Column({length: 1000, nullable: false})
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria; // Chave Estrangeira
}