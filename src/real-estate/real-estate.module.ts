import { Module } from '@nestjs/common';
import { RealEstateEntity } from 'src/entity/real-estate.entity';
import { RealEstateController } from './real-estate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from 'src/entity/client.entity';
import { RealEstate } from './real-estate';

@Module({
    imports:[TypeOrmModule.forFeature([ClientEntity , RealEstateEntity])],
    controllers: [RealEstateController],
    providers: [RealEstate],
})
export class RealEstateModule {}
