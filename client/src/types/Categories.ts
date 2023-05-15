import { New } from "./News"
import { Opinion } from "./Opinion"

export type Categories =
{
    id:number,
    title:string,
    createdAt:string,
    updatedAt:string,
    news:New[],
    opinions:Opinion[]
}[]