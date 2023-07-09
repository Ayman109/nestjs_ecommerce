import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { Client } from './client';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from '../entity/client.entity';
import { RealEstateEntity } from 'src/entity/real-estate.entity';

@Module({
    imports:[TypeOrmModule.forFeature([ClientEntity , RealEstateEntity])],
    controllers: [ClientController],
    providers: [Client],
})
export class ClientModule {}
