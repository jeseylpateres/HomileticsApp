import { Division } from "./division";

export class Study {
    bookId: number;
    book: string;
    chapter: number;
    verseStart: number;
    verseEnd: number;
    status: number;
    divisions: Division[];
    dateCreated: string;
    dateUpdated: string;

}