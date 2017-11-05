import { Study } from "../study/study";

export class User {
    id: number;
    userName: string;
    userEmail: string;
    studies: Study[];
    dateCreated: string;
    dateUpdated: string;
}