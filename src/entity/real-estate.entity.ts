import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClientEntity } from "./client.entity";

 @Entity()
export class RealEstateEntity {
    @PrimaryGeneratedColumn()
    idEstate : number ; 
    @Column({nullable:true})
    adressEstate: string ; 
    @Column({nullable:true})
    price:number ; 
    @Column({nullable:true})
    image:string ; 


    @OneToMany(type=> ClientEntity, 
     client => client.realEstate   
        )
        client:ClientEntity;
}