import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { RealEstate } from './real-estate';
import { CreateRealEstateDto } from 'src/dto/real-estate.dto/create-real-estate.dto';
import { UpdateRealEstateDto } from 'src/dto/real-estate.dto/update-real-estate.dto';

@Controller('realestate')
export class RealEstateController {
    constructor(private readonly realEstateService : RealEstate){}

    @Get()
    getAll() {
    return this.realEstateService.findAll();
    }

    @Post("create")
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createRealEstateDto : CreateRealEstateDto){
        return this.realEstateService.createRealEstate(createRealEstateDto) ; 
    }

    @Get(":id")
    @HttpCode(HttpStatus.FOUND)
    get(@Param("id") id : number){
        return this.realEstateService.findOne(id) ; 
    }

    @Patch("update/:id")
    update(@Param("id") id : number , @Body() updateRealEstateDto: UpdateRealEstateDto){
        return this.realEstateService.update(id ,updateRealEstateDto )
    }

    @Delete("delete/:id")
    delete(@Param("id") id : number){
        return this.realEstateService.delete(id) ; 
    }

}
