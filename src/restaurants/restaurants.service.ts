import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import { Restaurant } from './schemas/restaurant.schema';
import * as mongoose from 'mongoose';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Query } from 'express-serve-static-core';

@Injectable()
export class RestaurantsService {

constructor(
    // @InjectModel(Restaurant.name)
    @InjectModel(Restaurant.name)
    private restaurantModel: mongoose.Model<Restaurant>
) {}

//Get all restautrants => GET /restaurants

async findAll(query:Query): Promise<Restaurant[]> {

const keyword = query.keyword ? {

    description:{
        $regex:query.keyword,
        $options:'i'
    }

}:{}

    const restaurants = await this.restaurantModel.find({...keyword})

    return restaurants ;
}

//Create new Restaurant =>  POST /restaurants

async create(restaurantz: Restaurant) : Promise<Restaurant> {

    const restaurant = await this.restaurantModel.create(restaurantz)

    return restaurant

}

//find restaurant by id

// async findRestaurantbyId(id: string ): Promise<Restaurant>{


    async findRestaurantbyId(id: string ): Promise<Restaurant>{
const rest = await this.restaurantModel.findById(id) ;

if (!rest){

    throw new NotFoundException('restaurant not found with id' );
}

return rest;

}

//update restaurant by if => PUT /restaurant/:id

async updateRestaurant(id:string, restaurant:Restaurant): Promise<Restaurant>{



    const rest = await this.restaurantModel.findByIdAndUpdate(id, restaurant,{
        new:true,
        runValidators:true
    });

    return rest

}


//Delete by id
async deleteRestaurantById(id:string):Promise<Restaurant>{


    const rest = await this.restaurantModel.findByIdAndDelete(id) ;

    return rest ;


}


}
