type Items={
    item:string,
    quantity:number
    price:number
}

export default interface IOrder{
    customer: string;
    items: Items[];
}

export interface IOrderDetails extends IOrder{
    id: string
      status: string,
      totalAmount:number,
      totalPrice:number,
}