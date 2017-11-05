import { BibleData } from "./bible-data";
import { BookType } from "../../core/enums/booktype";

export class BibleDataService extends BibleData {

    constructor() {
        super();
    }

    /**
     * Readonly
     */
    private readonly _empty: number = 0;
    private readonly _totalBook: number = this.bookDetails.length;
    private readonly _totalNewBook: number = 27;
    private readonly _totalOldBook: number = 39;

    /**
     * Properties
     */
    private userId: number = null;

    /**
     * Set User ID
     * 
     * @param id 
     */
    setUserId(id: number) {
        this.userId = id;
    }

    /**
     * Get Chapter By ID
     * bookType = 1 : old and new testament
     * bookType = 2 : old testament
     * bookType = 3 : new testament
     * 
     * @param bookId 
     * @param bookType 
     * @returns string
     */
    getChapterById(bookId: number, bookType: BookType): string {

        let chapter: string = null;

        if (bookType == BookType.OldAndNewTestament) {
            chapter = this.bookDetails[bookId].chapter;
        }
        if (bookType == BookType.OldTestament) {
            chapter = this.bookDetails[bookId].chapter;
        }
        if (bookType == BookType.NewTestament) {
            chapter = this.bookDetails[bookId + this._totalOldBook].chapter;
        }
        return chapter;
    }

    /**
     * Get Title By ID
     * bookType = 1 : old and new testament
     * bookType = 2 : old testament
     * bookType = 3 : new testament
     * 
     * @param bookId 
     * @param bookType 
     * @returns string
     */
    getTitleById(bookId: number, bookType: BookType): string {

        let title: string = null;

        if (bookType == BookType.OldAndNewTestament) {
            title = this.bookDetails[bookId].book;
        }
        if (bookType == BookType.OldTestament) {
            title = this.bookDetails[bookId].book;
        }
        if (bookType == BookType.NewTestament) {
            title = this.bookDetails[bookId + this._totalOldBook].book;
        }

        return title;
    }


    /**
     * Get Book Testament Per ID
     * bookType = 1 : old and new testament
     * bookType = 2 : old testament
     * bookType = 3 : new testament
     * 
     * @param bookId 
     * @param bookType 
     * @return string
     */
    getBookTestamentById(bookId: number, bookType: BookType): string {

        let testament: string;

        if (bookType == BookType.OldAndNewTestament) {
            testament = this.bookDetails[bookId].testament;
        }
        if (bookType == BookType.OldTestament) {
            if (bookId >= this._totalOldBook) {
                return "Error: Input valid bookId for Old Testament.";
            }
            testament = this.bookDetails[bookId].testament;
        }
        if (bookType == BookType.NewTestament) {
            testament = this.bookDetails[bookId + this._totalOldBook].testament;
        }

        console.log("getTestamentById" + testament);
        return testament;
    }

    /**
     * Get All Book Title Abbreviation
     * bookType = 1 : old and new testament
     * bookType = 2 : old testament
     * bookType = 3 : new testament
     * 
     * @param bookType 
     * @returns String[]
     */
    getAllAbbreviationOfBook(bookType: BookType): string[] {

        let abbv = [];

        switch (bookType) {
            case BookType.OldAndNewTestament:
                {
                    for (let i = 0; i <= (this._totalBook - 1); i++) {
                        abbv.push(this.bookDetails[i].abbv);
                    }
                }
                break;
            case BookType.OldTestament:
                {
                    for (let i = 0; i <= (this._totalBook - (this._totalNewBook + 1)); i++) {
                        abbv.push(this.bookDetails[i].abbv);
                    }
                }
                break;
            case BookType.NewTestament:
                {
                    for (let i = this._totalOldBook; i <= (this._totalBook - 1); i++) {
                        abbv.push(this.bookDetails[i].abbv);
                    }
                }
                break;

            default:
                break;
        }

        //console.log("Abbrev: "+abbv);
        return abbv;
    }

    /**
     * Get All Chapter of the Book
     * bookType = 1 : old and new testament
     * bookType = 2 : old testament
     * bookType = 3 : new testament
     * 
     * @param bookType 
     * @returns number[]
     */
    getAllChapters(bookType: BookType): number[] {

        let chapters = [];

        switch (bookType) {
            case BookType.OldAndNewTestament:
                {
                    for (let i = 0; i <= (this._totalBook - 1); i++) {
                        chapters.push(this.bookDetails[i].chapters);
                    }
                }
                break;
            case BookType.OldTestament:
                {
                    for (let i = 0; i <= (this._totalBook - (this._totalNewBook + 1)); i++) {
                        chapters.push(this.bookDetails[i].chapters);
                    }
                }
                break;
            case BookType.NewTestament:
                {
                    for (let i = this._totalOldBook; i <= (this._totalBook - 1); i++) {
                        chapters.push(this.bookDetails[i].chapters);
                    }
                }
                break;

            default:
                break;
        }

        //console.log("chapter: "+chapters);
        return chapters;
    }

    /**
     * Get all Verses of the Book
     * bookType = 1 : old and new testament
     * bookType = 2 : old testament
     * bookType = 3 : new testament
     * 
     * @param bookType 
     * @returns number[]
     */
    getAllVersesInArray(bookType: any): number[] {

        let verses = [];

        switch (bookType) {
            case BookType.OldAndNewTestament:
                {
                    for (let i = 0; i <= (this._totalBook - 1); i++) {
                        verses.push(this.bookDetails[i].verses);
                    }
                }
                break;
            case BookType.OldTestament:
                {
                    for (let i = 0; i <= (this._totalBook - (this._totalNewBook + 1)); i++) {
                        verses.push(this.bookDetails[i].verses);
                    }
                }
                break;
            case BookType.NewTestament:
                {
                    for (let i = this._totalOldBook; i <= (this._totalBook - 1); i++) {
                        verses.push(this.bookDetails[i].verses);
                    }
                }
                break;
            default:
                break;
        }

        console.log(verses);
        return verses;
    }

    /**
     * Get all Title of the Book
     * bookType = 1 : old and new testament
     * bookType = 2 : old testament
     * bookType = 3 : new testament
     * 
     * @param bookType 
     * @returns number[]
     */
    getAllTitle(bookType: BookType): number[] {

        let title = [];

        switch (bookType) {
            // Old and New Testament Only
            case BookType.OldAndNewTestament:
                {
                    for (let i = 0; i <= (this._totalBook - 1); i++) {
                        title.push(this.bookDetails[i].title);
                    }
                }
                break;
            case BookType.OldTestament:
                {
                    for (let i = 0; i <= (this._totalBook - (this._totalNewBook + 1)); i++) {
                        title.push(this.bookDetails[i].title);
                    }
                }
                break;
            case BookType.NewTestament:
                {
                    for (let i = this._totalOldBook; i <= (this._totalBook - 1); i++) {
                        title.push(this.bookDetails[i].title);
                    }
                }
                break;

            default:
                break;
        }

        console.log(title);
        return title;
    }

    /**
     * Clear All Data for all Chapters
     * bookType = 1 : old and new testament
     * bookType = 2 : old testament
     * bookType = 3 : new testament
     * 
     * @param bookType 
     * @returns number[]
     */
    clearAllDataForAllChapters(bookType: any): number[] {

        return this.pushData(this._empty, bookType);
    }

    /**
     * Push Data per BookType
     * bookType = 1 : old and new testament
     * bookType = 2 : old testament
     * bookType = 3 : new testament
     * 
     * @param bookType 
     * @param data 
     */
    pushData(value: any, bookType: BookType): any[] {

        let key = [];

        switch (bookType) {
            case BookType.OldAndNewTestament:
                {
                    for (let i in this.bookDetails) {
                        key.push(value);
                    }
                    //console.log("OUTPUT: Old and New Testament");
                }
                break;
            case BookType.OldTestament:
                {
                    for (let i = 0; i <= (this._totalBook - (this._totalNewBook + 1)); i++) {
                        key.push(value);
                    }
                    //console.log("OUTPUT: Old Testament");
                }
                break;
            case BookType.NewTestament:
                {
                    for (let i = this._totalOldBook; i <= (this._totalBook - 1); i++) {
                        key.push(value);
                    }
                    //console.log("OUTPUT: New Testament");
                }
                break;
            default:
                break;
        }

        //console.log("PUSH DATA: "+ key);
        return key;
    }


    /**
     * Random Data for all BookType
     * bookType = 1 : old and new testament
     * bookType = 2 : old testament
     * bookType = 3 : new testament
     * 
     * @param bookType
     * @returns number
     */
    setRandomDataForAllChapters(bookType: BookType): number[] {

        let chapter = [];
        let random_data = Math.round(Math.random() * 100);

        switch (bookType) {
            case BookType.OldAndNewTestament:
                {
                    for (let i in this.bookDetails) {
                        chapter.push(random_data % this.bookDetails[i].chapters + 1);
                    }
                    break;
                }
            case BookType.OldTestament:
                {
                    for (let i = 0; i <= (this._totalBook - (this._totalNewBook + 1)); i++) {
                        chapter.push(random_data % this.bookDetails[i].chapters + 1);
                    }
                    break;
                }
            case BookType.NewTestament:
                {
                    for (let i = this._totalOldBook; i <= (this._totalBook - 1); i++) {
                        chapter.push(random_data % (this.bookDetails[i].chapters + 1));
                    }
                    break;
                }
            default:
                break;
        }

        console.log("Random Result: " + chapter);
        return chapter;
    }




    /**
     * ==================================================
     * ==================================================
     * Mock User Data
     * ==================================================
     * ==================================================
     */
    public getAllUserId(): string[] {
        let user = [];
        for (let i in this.bookUsers) {
            user.push(this.bookUsers[i].id);
        }
        console.log("Mock User: " + user);
        return user;
    }

    public getUserIdById(id: number): string {
        let user = this.bookUsers[id].id;
        console.log(user);
        return user;
    }

    public getUserNameById(id: number): string {
        let user = this.bookUsers[id].userName;
        console.log(user);
        return user;
    }

    public getUserEmailById(id: number): string {
        let user = this.bookUsers[id].userEmail;
        console.log(user);
        return user;
    }

    public getUserStudiesBook(): string[] {
        let user = [];
        for (let i in this.bookUsers) {
            user.push(this.bookUsers[this.userId].studies[i].book);
        }
        console.log("Mock User: " + user);
        return user;
    }

    public getTotalDivisionsPerUserStudies(): string[] {
        let user = [];
        for (let i in this.bookUsers) {
            user.push(this.bookUsers[this.userId].studies[i].divisions.length);
        }
        console.log("Mock User: " + user);
        return user;
    }

    public getSetOfStatusPerPerDivisions(id: number): boolean[] {
        let user = [];
        //user.push(this.bookUser[this.userId].studies[0].divisions.length);
        user.push(this.bookUsers[this.userId].studies[0].divisions[0].verseContents.length);
        /*
                for(let i = 0; i <= (this.bookUser[this.userId].studies.length); i++) {
                    for(let j = 0; j <= (this.bookUser[this.userId].studies[i].divisions.length); j++) {
                        //if(this.bookUser[this.userId].studies[i].bookId == id) {
                            user.push(this.bookUser[this.userId].studies[i].divisions[j].status);
                        //}
                    }
                }*/
        console.log("getSetOfStatusPerPerDivisions Result: " + user);
        return user;
    }




    /*
    public getUserStudiesSummaryMap() : Map<number, IUserStudyList[]> {
        
        let usermap: Map<number, IUserStudyList[]> = new Map<number, IUserStudyList[]>();
        let userarray : IUserStudyList[];
        for(let i = 0; i <= (this.bookUser.length); i++) {
            userarray.push({
                userId: this.bookUser[this.userId].id,
                userName: this.bookUser[this.userId].userName,
                totalStudiedBooks: this.bookUser[i].studies.length,
                totalStudiedPerDivisions: this.bookUser[i].studies.length,
                totalStudiedDivisionPerVerseContent: this.bookUser[i].studies.length,
                dateCreated: this.bookUser[i].dateCreated,
                dateUpdated: this.bookUser[i].dateUpdated
            });
            
        }
        usermap.set(1, userarray);

        console.log(userarray);
        return usermap;
    }
    */

}

/*
type IUserStudyList = { 
    userId: number;
    userName: string;
    totalStudiedBooks: number;
    totalStudiedPerDivisions: number;
    totalStudiedDivisionPerVerseContent: number;
    dateCreated: string;
    dateUpdated: string;
};

*/