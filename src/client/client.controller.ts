import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Client } from './client';
import { CreateClientDto } from './dto/create-client.dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto/update-client.dto';

@Controller('client')
export class ClientController {
    constructor(private readonly clientService : Client){}

    @Get()
    getAll() {
    return this.clientService.findAll();
    }

    @Post("create")
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createClientDto : CreateClientDto){
        return this.clientService.createClient(createClientDto) ; 
    }

    @Get(":id")
    @HttpCode(HttpStatus.FOUND)
    get(@Param("id") id : number){
        return this.clientService.findOne(id) ; 
    }

    @Patch("update/:id")
    update(@Param("id") id : string , @Body() updateClientDto: UpdateClientDto){
        return this.clientService.update(id ,updateClientDto )
    }

    @Delete("delete/:id")
    delete(@Param("id") id : number){
        return this.clientService.delete(id) ; 
    }

}
