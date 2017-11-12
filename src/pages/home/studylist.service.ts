import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
/**
 * ENUMS
 */
import { BookType } from "../../core/enums/booktype.enum";
/**
 * MODELS
 */
import { BibleStudies } from "../../models/biblestudy/study-mock";
import { StudyUser } from "../../models/biblestudy/study-user.model";
import { StudyListModel } from "./studylist.model";



@Injectable()
export class StudyListService {

    _list: StudyListModel[] = [];
    private readonly _totalBook: number = BibleStudies.length;
    private readonly _totalNewBook: number = 27;
    private readonly _totalOldBook: number = 39;

    /**
     * Get Users
     */
    getUser(): StudyUser[] {
        console.log("GetUsers: " + BibleStudies);
        return BibleStudies;
    }

    /**
     * Get All UserId
     * 
     * @returns string[]
     */
    public getAllUserId(): string[] {
        let user = [];
        for (let i in BibleStudies) {
            user.push(Object.assign({}, BibleStudies[i].id));
        }
        console.log("Mock User: " + user);
        return user;
    }

    /**
     * Get UserId By UserId
     * 
     * @param userId 
     * @returns number
     */
    public getUserIdById(userId: number): number {
        let user = BibleStudies[userId].id;
        console.log(user);
        return user;
    }

    /**
     * Get UserName By UserId
     * 
     * @param userId 
     * @return string
     */
    public getUserNameByUserId(userId: number): string {
        let user = BibleStudies[userId].userName;
        console.log(user);
        return user;
    }

    /**
     * Get UserEmail By UserID
     * 
     * @param userId
     * @returns string
     */
    public getUserEmailByUserId(userId: number): string {
        let user = BibleStudies[userId].userEmail;
        console.log(user);
        return user;
    }

    /**
     * Get List of Books By UserId
     * 
     * @param userId 
     * @returns string[]
     */
    public getUserStudiesBookByUserId(userId: number): string[] {
        let user = [];
        for (let i in BibleStudies) {
            user.push(Object.assign({}, BibleStudies[userId].studies[i].book));
        }
        console.log("Mock User: " + user);
        return user;
    }

    /**
     * Get All StudyList
     * 
     * @param userId 
     * @param bookType 
     * @returns StudyListModel[]
     */
    public getStudyList(userId: number, bookType: BookType): StudyListModel[] {
        this._list = [];
        let model: StudyListModel = new StudyListModel();

        switch (bookType) {
            case BookType.OldAndNewTestament:
                {
                    for (let i = 0; i <= BibleStudies[userId].studies.length - 1; i++) {

                        model.bookId = BibleStudies[userId].studies[i].bookId;
                        model.book = BibleStudies[userId].studies[i].book;
                        model.chapter = BibleStudies[userId].studies[i].chapter;

                        for (let j in BibleStudies[userId].studies[i].divisions) {
                            model.divisionVerseStart = BibleStudies[userId].studies[i].divisions[j].divisionVerseStart;
                            model.divisionVerseEnd = (BibleStudies[userId].studies[i].divisions[j].verseContents.length + model.divisionVerseStart) - 1;
                            model.summarySentense = BibleStudies[userId].studies[i].divisions[j].summarySentence;
                            model.dateUpdated = BibleStudies[userId].studies[i].divisions[j].dateUpdated;

                            if (BibleStudies[userId].studies[i].divisions[j].status) {
                                model.divStatus = 1;
                            } else { model.divStatus = 2; }

                            this._list.push(Object.assign({}, model));
                        }
                    }
                }
                break;
            case BookType.OldTestament:
                {
                    for (let i = 0; i <= BibleStudies[userId].studies.length - 1; i++) {

                        if (BibleStudies[userId].studies[i].bookId <= 39) {

                            model.bookId = BibleStudies[userId].studies[i].bookId;
                            model.book = BibleStudies[userId].studies[i].book;
                            model.chapter = BibleStudies[userId].studies[i].chapter;

                            for (let j in BibleStudies[userId].studies[i].divisions) {

                                model.divisionVerseStart = BibleStudies[userId].studies[i].divisions[j].divisionVerseStart;
                                model.divisionVerseEnd = (BibleStudies[userId].studies[i].divisions[j].verseContents.length + model.divisionVerseStart) - 1;
                                model.summarySentense = BibleStudies[userId].studies[i].divisions[j].summarySentence;
                                model.dateUpdated = BibleStudies[userId].studies[i].divisions[j].dateUpdated;

                                if (BibleStudies[userId].studies[i].divisions[j].status) {
                                    model.divStatus = 1;
                                } else { model.divStatus = 2; }

                                this._list.push(Object.assign({}, model));
                            }
                        }
                    }
                }
                break;
            case BookType.NewTestament:
                {
                    for (let i = 0; i <= BibleStudies[userId].studies.length - 1; i++) {

                        if (BibleStudies[userId].studies[i].bookId > 39) {

                            model.bookId = BibleStudies[userId].studies[i].bookId;
                            model.book = BibleStudies[userId].studies[i].book;
                            model.chapter = BibleStudies[userId].studies[i].chapter;

                            for (let j in BibleStudies[userId].studies[i].divisions) {
                                model.divisionVerseStart = BibleStudies[userId].studies[i].divisions[j].divisionVerseStart;
                                model.divisionVerseEnd = (BibleStudies[userId].studies[i].divisions[j].verseContents.length + model.divisionVerseStart) - 1;
                                model.summarySentense = BibleStudies[userId].studies[i].divisions[j].summarySentence;
                                model.dateUpdated = BibleStudies[userId].studies[i].divisions[j].dateUpdated;

                                if (BibleStudies[userId].studies[i].divisions[j].status) {
                                    model.divStatus = 1;
                                } else { model.divStatus = 2; }

                                this._list.push(Object.assign({}, model));
                            }
                        }
                    }
                }
                break;
            default:
                break;
        }
        return this._list.slice();
    }

    /**
     * Get All StudyList Per bookId
     * 
     * @param userId 
     * @param bookType 
     * @returns StudyListModel[]
     */
    public getStudyListByBookId(bookId: number, userId: number, bookType: BookType): StudyListModel[] {
        bookId += 1;
        this._list = [];
        let model: StudyListModel = new StudyListModel();

        switch (bookType) {
            case BookType.OldAndNewTestament:
                {
                    for (let i = 0; i <= BibleStudies[userId].studies.length - 1; i++) {

                        if (bookId == BibleStudies[userId].studies[i].bookId) {

                            model.bookId = BibleStudies[userId].studies[i].bookId;
                            model.book = BibleStudies[userId].studies[i].book;
                            model.chapter = BibleStudies[userId].studies[i].chapter;

                            for (let j in BibleStudies[userId].studies[i].divisions) {
                                model.divisionVerseStart = BibleStudies[userId].studies[i].divisions[j].divisionVerseStart;
                                model.divisionVerseEnd = (BibleStudies[userId].studies[i].divisions[j].verseContents.length + model.divisionVerseStart) - 1;
                                model.summarySentense = BibleStudies[userId].studies[i].divisions[j].summarySentence;
                                model.dateUpdated = BibleStudies[userId].studies[i].divisions[j].dateUpdated;

                                if (BibleStudies[userId].studies[i].divisions[j].status) {
                                    model.divStatus = 1;
                                } else { model.divStatus = 2; }

                                this._list.push(Object.assign({}, model));
                            }
                        }
                    }
                }
                break;
            case BookType.OldTestament:
                {
                    for (let i = 0; i <= BibleStudies[userId].studies.length - 1; i++) {

                        if (BibleStudies[userId].studies[i].bookId <= 39) {

                            if (bookId == BibleStudies[userId].studies[i].bookId) {

                                model.bookId = BibleStudies[userId].studies[i].bookId;
                                model.book = BibleStudies[userId].studies[i].book;
                                model.chapter = BibleStudies[userId].studies[i].chapter;

                                for (let j in BibleStudies[userId].studies[i].divisions) {
                                    model.divisionVerseStart = BibleStudies[userId].studies[i].divisions[j].divisionVerseStart;
                                    model.divisionVerseEnd = (BibleStudies[userId].studies[i].divisions[j].verseContents.length + model.divisionVerseStart) - 1;
                                    model.summarySentense = BibleStudies[userId].studies[i].divisions[j].summarySentence;
                                    model.dateUpdated = BibleStudies[userId].studies[i].divisions[j].dateUpdated;

                                    if (BibleStudies[userId].studies[i].divisions[j].status) {
                                        model.divStatus = 1;
                                    } else { model.divStatus = 2; }

                                    this._list.push(Object.assign({}, model));
                                }
                            }
                        }
                    }
                }
                break;
            case BookType.NewTestament:
                {
                    for (let i = 0; i <= BibleStudies[userId].studies.length - 1; i++) {

                        if (BibleStudies[userId].studies[i].bookId > 39) {

                            if ((bookId + 39) == BibleStudies[userId].studies[i].bookId) {

                                model.bookId = BibleStudies[userId].studies[i].bookId;
                                model.book = BibleStudies[userId].studies[i].book;
                                model.chapter = BibleStudies[userId].studies[i].chapter;

                                for (let j in BibleStudies[userId].studies[i].divisions) {
                                    model.divisionVerseStart = BibleStudies[userId].studies[i].divisions[j].divisionVerseStart;
                                    model.divisionVerseEnd = (BibleStudies[userId].studies[i].divisions[j].verseContents.length + model.divisionVerseStart) - 1;
                                    model.summarySentense = BibleStudies[userId].studies[i].divisions[j].summarySentence;
                                    model.dateUpdated = BibleStudies[userId].studies[i].divisions[j].dateUpdated;

                                    if (BibleStudies[userId].studies[i].divisions[j].status) {
                                        model.divStatus = 1;
                                    } else { model.divStatus = 2; }

                                    this._list.push(Object.assign({}, model));
                                }
                            }
                        }
                    }
                }
                break;
            default:
                break;
        }
        return this._list.slice();
    }
}