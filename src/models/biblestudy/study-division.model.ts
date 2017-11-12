import { StudyVerseContent } from "./study-verse-content.model";

export class StudyDivision {
    divisionNo: number;
    divisionVerseStart: number;
    verseContents: StudyVerseContent[];
    summarySentence: string;
    realLifeApplication: string;
    status: boolean;
    dateCreated: string;
    dateUpdated: string;
}