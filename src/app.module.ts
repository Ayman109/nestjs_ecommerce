import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RealEstateModule } from './real-estate/real-estate.module';

@Module({
  imports: [ClientModule,
    TypeOrmModule.forRoot({ 
      type: 'postgres',
      host: 'localhost',
      port: 5432, 
      username: 'postgres',
      password: 'pass123',
      database: 'postgres', 
      autoLoadEntities: true,
      synchronize: true,
    }),
    RealEstateModule,
  ],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
