import { Injectable } from "@angular/core";

import { BookType } from "../../core/enums/booktype.enum";

import { BibleBook } from "../../models/bible/bible-mock";
import { Bible } from "../../models/bible/bible.model";

@Injectable()
export class BibleService {
    /**
     * Readonly
     */
    private readonly _empty: number = 0;
    private readonly _totalBook: number = BibleBook.length;
    private readonly _totalNewBook: number = 27;
    private readonly _totalOldBook: number = 39;
    private _val: number;

    /**
     * Get Bible
     */
    getBible(): Bible[] {
        return BibleBook;
    }

    getIndexData(): number {
        return this._val;
    }

    /**
     * Get Chapter By ID
     * bookType = 1 : old and new testament
     * bookType = 2 : old testament
     * bookType = 3 : new testament
     * 
     * @param bookId 
     * @param bookType 
     * @returns number
     */
    getChapterById(bookId: number, bookType: BookType): number {

        let chapters: number;

        if (bookType == BookType.OldAndNewTestament) {
            chapters = BibleBook[bookId].chapters;
        }
        if (bookType == BookType.OldTestament) {
            chapters = BibleBook[bookId].chapters;
        }
        if (bookType == BookType.NewTestament) {
            chapters = BibleBook[bookId + this._totalOldBook].chapters;
        }
        return chapters;
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

        let book: string = null;

        if (bookType == BookType.OldAndNewTestament) {
            book = BibleBook[bookId].book;
        }
        if (bookType == BookType.OldTestament) {
            book = BibleBook[bookId].book;
        }
        if (bookType == BookType.NewTestament) {
            book = BibleBook[bookId + this._totalOldBook].book;
        }

        return book;
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
            testament = BibleBook[bookId].testament;
        }
        if (bookType == BookType.OldTestament) {
            if (bookId >= this._totalOldBook) {
                return "Error: Input valid bookId for Old Testament.";
            }
            testament = BibleBook[bookId].testament;
        }
        if (bookType == BookType.NewTestament) {
            testament = BibleBook[bookId + this._totalOldBook].testament;
        }

        //console.log("getTestamentById" + testament);
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
                        abbv.push(BibleBook[i].abbv);
                    }
                }
                break;
            case BookType.OldTestament:
                {
                    for (let i = 0; i <= (this._totalBook - (this._totalNewBook + 1)); i++) {
                        abbv.push(BibleBook[i].abbv);
                    }
                }
                break;
            case BookType.NewTestament:
                {
                    for (let i = this._totalOldBook; i <= (this._totalBook - 1); i++) {
                        abbv.push(BibleBook[i].abbv);
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
                        chapters.push(BibleBook[i].chapters);
                    }
                }
                break;
            case BookType.OldTestament:
                {
                    for (let i = 0; i <= (this._totalBook - (this._totalNewBook + 1)); i++) {
                        chapters.push(BibleBook[i].chapters);
                    }
                }
                break;
            case BookType.NewTestament:
                {
                    for (let i = this._totalOldBook; i <= (this._totalBook - 1); i++) {
                        chapters.push(BibleBook[i].chapters);
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
                        verses.push(BibleBook[i].verses);
                    }
                }
                break;
            case BookType.OldTestament:
                {
                    for (let i = 0; i <= (this._totalBook - (this._totalNewBook + 1)); i++) {
                        verses.push(BibleBook[i].verses);
                    }
                }
                break;
            case BookType.NewTestament:
                {
                    for (let i = this._totalOldBook; i <= (this._totalBook - 1); i++) {
                        verses.push(BibleBook[i].verses);
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
                        title.push(BibleBook[i].title);
                    }
                }
                break;
            case BookType.OldTestament:
                {
                    for (let i = 0; i <= (this._totalBook - (this._totalNewBook + 1)); i++) {
                        title.push(BibleBook[i].title);
                    }
                }
                break;
            case BookType.NewTestament:
                {
                    for (let i = this._totalOldBook; i <= (this._totalBook - 1); i++) {
                        title.push(BibleBook[i].title);
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
                    for (let i in BibleBook) {
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
        let val: number;

        switch (bookType) {
            case BookType.OldAndNewTestament:
                {
                    for (let i = 0; i <= this._totalBook - 1; i++) {
                        val = random_data % BibleBook[i].chapters + 1;
                        if (i == 0) {
                            this._val = val;
                        }
                        chapter.push(val);
                    }
                    break;
                }
            case BookType.OldTestament:
                {
                    for (let i = 0; i <= (this._totalBook - (this._totalNewBook + 1)); i++) {
                        val = random_data % BibleBook[i].chapters + 1;
                        if (i == 0) {
                            this._val = val;
                        }
                        chapter.push(val);
                    }
                    break;
                }
            case BookType.NewTestament:
                {
                    for (let i = this._totalOldBook; i <= (this._totalBook - 1); i++) {
                        val = random_data % (BibleBook[i].chapters + 1);
                        if (i == this._totalOldBook) {
                            this._val = val;
                        }
                        chapter.push(val);
                    }
                    break;
                }
            default:
                break;
        }

        //console.log("Random Result: " + chapter);
        return chapter;
    }

}