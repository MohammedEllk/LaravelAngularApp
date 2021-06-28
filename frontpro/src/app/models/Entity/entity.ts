import { User } from "src/app/services/shared/auth.service";

export interface entity{
    id : number,
    title : string,
    created_at : Date,
    updated_at : Date,
    users : User[],
}