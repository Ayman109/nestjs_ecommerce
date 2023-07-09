import { IsNumber, IsObject, IsString } from "class-validator";
import { RealEstateEntity } from "src/entity/real-estate.entity";

export class CreateRealEstateDto {
    @IsString()
    adressEstate: string ; 

    @IsNumber()
    price:number ; 

    @IsString()
    image:string ; 

}

