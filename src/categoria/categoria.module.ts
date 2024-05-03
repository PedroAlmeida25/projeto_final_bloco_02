import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaService } from './services/categoria.service';
import { Categoria } from './entities/categoria.entity';
import { CategoriaController } from './controllers/categoria.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    controllers: [CategoriaController],
    providers: [CategoriaService],
    exports: [TypeOrmModule]
})
export class CategoriaModule {};