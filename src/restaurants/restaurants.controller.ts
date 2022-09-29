import {Delete , Put, Controller, Get, Post , Body, Param,Query, NotFoundException} from '@nestjs/common';
import { CretaRestaurantDTO } from './dto/create-restaurant.dto';
import { UpdateRestaurantDTO } from './dto/update-restaurant.dto';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './schemas/restaurant.schema';
import {Query as ExpressQuery} from 'express-serve-static-core'

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService){}

@Get()
  async getAllRestaurants(@Query() query:ExpressQuery):Promise<Restaurant[]> {

    return this.restaurantsService.findAll(query) ;
  }


  @Post()
  async createRestaurant(
    @Body() 
    restaurant : CretaRestaurantDTO
  ) : Promise<Restaurant> {


         return this.restaurantsService.create(restaurant)

  }



@Get(':id')
async getRestaurant(
@Param('id') 
 id:string

): Promise<Restaurant> {
    const res =  this.restaurantsService.findRestaurantbyId(id);


    return res;
}

@Put(':id')
async updateRestauirant(
  @Param('id') 
  id: string,
  @Body()
restaurant:UpdateRestaurantDTO
):Promise<Restaurant>{


  await this.restaurantsService.findRestaurantbyId(id)
  return this.restaurantsService.updateRestaurant(id,restaurant)

}


@Delete(':id')
async deleteRestaurant(
  @Param('id')
  id:string,
):Promise<{deleted: Boolean} > {

  await this.restaurantsService.findRestaurantbyId(id);
const rest = this.restaurantsService.deleteRestaurantById(id) ;
if(rest){
  return {
  deleted: true,
  };
}


}

}






