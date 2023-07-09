import { IsString , IsNumber, IsObject, IsOptional, IsArray} from "class-validator";
import { RealEstateEntity } from "src/entity/real-estate.entity";

export class CreateClientDto {
    @IsString()
    readonly firstNameClient : string ;
    @IsString()
    readonly lastNameClient : string ;
    @IsString()
    readonly adressClient : string ; 
    @IsNumber()
    readonly numTlf : number ;
    @IsOptional()
    readonly realEstate:RealEstateEntity[]; 

}
