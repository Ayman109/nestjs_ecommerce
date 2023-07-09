import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstateEntity } from "./real-estate.entity";
import { json } from "stream/consumers";

@Entity()
export class ClientEntity {
    @PrimaryGeneratedColumn()
    idClient : number ;
    @Column()
    firstNameClient : string ;
    @Column()
    lastNameClient : string ;
    @Column()
    adressClient : string ; 
    @Column()
    numTlf : number ;

    
    @JoinTable()
    @ManyToOne(type=> RealEstateEntity, 
     realEstate => realEstate.client  , {cascade : true} 
        )
        realEstate:RealEstateEntity[] ;
}