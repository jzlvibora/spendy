import { Category } from "./category";

export interface Expense {
    id?:number,
    title:string,
    description:string,
    category:Category,
    date:string,
    amount:number
}
