import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto/create-client.dto';
import { ClientEntity } from '../entity/client.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateClientDto } from './dto/update-client.dto/update-client.dto';
import { RealEstateEntity } from 'src/entity/real-estate.entity';
import { CreateRealEstateDto } from 'src/dto/real-estate.dto/create-real-estate.dto';

@Injectable()
export class Client {
    constructor(
        @InjectRepository(ClientEntity) private readonly clientReposatrie : Repository<ClientEntity>,
    @InjectRepository(RealEstateEntity) private readonly RealEstateReposatrie : Repository<RealEstateEntity> ,

    ){}

    
    async createClient(createClientDto : CreateClientDto){
        const client = this.clientReposatrie.create({...createClientDto}) ; 
        console.log("send");
        return this.clientReposatrie.save(client) ; 
    }

    async findAll():Promise<ClientEntity[]>{
        return this.clientReposatrie.find({relations : ['realEstate']});
    }


    async findOne(idClient:number): Promise<ClientEntity | null >{
        const client = this.clientReposatrie.findOneBy({idClient}) ; 
        if (!client) {
            throw new NotFoundException(`This Student : ${idClient} not found`);
           }
           return client;
    }


    async update(idClient:string , updateClientDto : UpdateClientDto){
        const realEstate = updateClientDto.realEstate && 
        (await Promise.all(
            updateClientDto.realEstate.map(x => this.preloadRealEstateByName(x.adressEstate))
        ))
     
        
        const client = await this.clientReposatrie.preload({idClient: +idClient , realEstate : realEstate,...updateClientDto}) ; 


        if (!client) {
            throw new NotFoundException(`This client : ${idClient} not found`);
           }
           return this.clientReposatrie.save(client);
    }


    async delete(idClient:number){
        return this.clientReposatrie.delete(idClient) ; 
    }


    private async preloadRealEstateByName(adressEstate : string)  {
        const realEstate = await this.RealEstateReposatrie.findOne({where : {adressEstate}})
        if(!realEstate){
           throw new NotFoundException();
        }
        return realEstate ; 
       
    }


}
