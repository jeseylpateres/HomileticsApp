export class StudyListModel {
    constructor(
        public bookId?: number,
        public book?: string,
        public chapter?: number,
        public divisionVerseStart?: number,
        public divisionVerseEnd?: number,
        public summarySentense?: string,
        public divStatus?: number, //Division status
        public dateUpdated?: string //Division dateUpdated
    ) { }
}