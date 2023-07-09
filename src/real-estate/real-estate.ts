import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/client/client';
import { CreateRealEstateDto } from 'src/dto/real-estate.dto/create-real-estate.dto';
import { UpdateRealEstateDto } from 'src/dto/real-estate.dto/update-real-estate.dto';
import { ClientEntity } from 'src/entity/client.entity';
import { RealEstateEntity } from 'src/entity/real-estate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RealEstate {
    constructor(
        @InjectRepository(RealEstateEntity) private readonly RealEstateReposatrie : Repository<RealEstateEntity> ,
        @InjectRepository(ClientEntity) private readonly clientEntity : Repository<ClientEntity>
    
    
    ){}

    
    async createRealEstate(createRealEstateDto : CreateRealEstateDto){
        const client = this.RealEstateReposatrie.create({...createRealEstateDto}) ; 
        console.log("send");
        return this.RealEstateReposatrie.save(client) ; 
    }

    async findAll():Promise<RealEstateEntity[]>{
        return this.RealEstateReposatrie.find();
    }


    async findOne(idEstate:number): Promise<RealEstateEntity | null >{
        const client = this.RealEstateReposatrie.findOneBy({idEstate}) ; 
        if (!client) {
            throw new NotFoundException(`This Student : ${idEstate} not found`);
           }
           return client;
    }


    async update(idEstate:number , updateRealEstateDto : UpdateRealEstateDto){
        const client = await this.RealEstateReposatrie.preload({idEstate: idEstate, ...updateRealEstateDto}) ; 
        if (!client) {
            throw new NotFoundException(`This Student : ${idEstate} not found`);
           }
           return this.RealEstateReposatrie.save(client);
    }


    async delete(idEstate:number){
        return this.RealEstateReposatrie.delete(idEstate) ; 
    }


}
