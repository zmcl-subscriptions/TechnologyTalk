import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { PromiseProvider } from "mongoose";
import { ObjectUnsubscribedErrorCtor } from "rxjs/internal/util/ObjectUnsubscribedError";


export enum Category{
FAST_FOOD = 'Fast Food' ,
CAFE = 'Cafe',
FINE_DINING = 'Fine Dining'


}

@Schema()
export class Restaurant {

    @Prop()
    name:string

    @Prop()
    description:string

    @Prop()
    email:string

    @Prop()
    phoneNo: string

    @Prop()
    adress:string

    @Prop()
    category: Category

    @Prop()
    images?: Object[] 
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant)