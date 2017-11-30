import { StudyDivision } from "./study-division.model";

export class StudyBible {
    bookId: number;
    book: string;
    chapter: number;
    chapterEnd: number;
    verseStart: number;
    verseEnd: number;
    status: boolean;
    divisions: StudyDivision[];
    dateCreated: string;
    dateUpdated: string;

}