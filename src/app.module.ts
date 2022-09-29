import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SachDemoModule } from './sach-demo/sach-demo.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { MongooseModule } from '@nestjs/mongoose/';
import { ConfigModule } from '@nestjs/config';

@Module({
 
  imports: [
    // ConfigModule.forRoot({
    // //  envFilePath: 'env.${process.env.NODE_ENV}',
    // envFilePath: '.env',
    //   isGlobal:true,

    // }),

ConfigModule.forRoot({
  isGlobal:true,
  envFilePath:'.env' ,
  
}),


    MongooseModule.forRoot(process.env.DB_URI),
   
  SachDemoModule, RestaurantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
