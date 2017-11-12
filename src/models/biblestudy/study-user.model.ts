import { StudyBible } from "./study-bible.model";

export class StudyUser {
    id: number;
    userName: string;
    userEmail: string;
    studies: StudyBible[];
    dateCreated: string;
    dateUpdated: string;
}