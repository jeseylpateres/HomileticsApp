import { BibleData } from "./bible-data";

export class BibleDataService extends BibleData {

    constructor() {
        super();
    }

    /**
     * readonly
     */
    private readonly _empty : number = 0;
    private readonly _totalBook : number =  this.bookDetails.length;
    private readonly _totalNewBook : number = 27;
    private readonly _totalOldBook : number = 39;

    private userId : number = null;

    setUserId(id : number) {
        this.userId = id;
    }
    /** 
     * Get Abbreviation of OLD and New Testament
     * 
     *  
     * */

     /**
      * Get All Abbreviation of Old and New Testament
      */
    getAllAbbvOfOldAndNewTestament() : string[] {
        let book = [];
        for (let i in this.bookDetails) {
            book.push(this.bookDetails[i].abbv);
        }
        //console.log("ONT - All Abbv Result: " + book);
        return book;
    } 

    getChapterByIdForOldAndNewTestament(id : number) : number[] {
        return this.bookDetails[id].chapters;
    }
    
    getVerseByIdForOldAndNewTestament(id : number) : number[] {
        return this.bookDetails[id].verses;
    }

    

    getAllChaptersOfOldAndNewTestament() : number[] {
        let chapters = [];
        for (let i in this.bookDetails) {
            chapters.push(this.bookDetails[i].chapters);
        }
        //console.log("ONT - All Chapter Result: " + chapters);
        return chapters;
    }
    
    

    getTitleByIdForOldAndNewTestament(id : number) : string {
        return this.bookDetails[id].book;
    }



    /** 
     * OLD Testament 
     * 
     * 
     * 
     * */

    getAllAbbvOfOldTestament() : string[] {
        let book = [];
        for(let i = 0; i <= (this._totalBook - 28); i++) {
            book.push(this.bookDetails[i].abbv);
        }
        //console.log("OT - All Abbv Result: " + book);
        return book;
    }

    getChapterByIdForOldTestament(id : number) : number[] {
        return this.bookDetails[id].chapters;
    }
    
    getAllChaptersOfOldTestament() : number[] {
        let chapters = [];
        for(let i = 0; i <= (this._totalBook - 28); i++) {
            chapters.push(this.bookDetails[i].chapters);
        }
        //console.log("OT - All Chapters Result: " + chapters);
        return chapters;
    }
    
    getTitleByIdForOldTestament(id : number) : string {
        return this.bookDetails[id].book;
    }
    


    /** 
     * NEW Testament 
     * 
     * 
     * */

    getAllAbbvOfNewTestament() : string[] {
        let book = [];
        for(let i = this._totalOldBook; i <= (this._totalBook -1); i++) {
            book.push(this.bookDetails[i].abbv);
        }
        //console.log("NT - All Abbv Result: " + book);
        return book;
    }
    
    getChapterByIdForNewTestament(id : number) : number[] {
        return this.bookDetails[id].chapters;
    }
    
    getAllChaptersOfNewTestament() : number[] {
        let chapters = [];
        for(let i = this._totalOldBook; i <= (this._totalBook -1); i++) {
            chapters.push(this.bookDetails[i].chapters);
        }
        //console.log("NT - All Chapters Result: " + chapters);
        return chapters;
    }

    getArrayOfVerses(bookType : any) : number[] {
        let verses = [];
        switch (bookType) {
            // Old and New Testament Only
            case 1:
                {
                    for(let i = 0; i <= (this._totalBook -1); i++) {
                        verses.push(this.bookDetails[i].verses);
                    }
                }
                break;
            // Old Testament Only
            case 2:
                {
                    for(let i = 0; i <= (this._totalBook - 28); i++) {
                        verses.push(this.bookDetails[i].verses);
                    }
                }
                break;
            // New Testament Only
            case 3:
                {
                    for(let i = this._totalOldBook; i <= (this._totalBook -1); i++) {
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
    
    getTitleById(bookId : number, bookType : any) : string {
        let title : string = null;
        if(bookType == 1) {
            title = this.bookDetails[bookId].book;
        }
        if(bookType == 2) {
            title = this.bookDetails[bookId].book;
        }
        if(bookType == 3) {
            title = this.bookDetails[bookId + this._totalOldBook].book;
        }
        return title;
    }

    getAllTitle(bookType : any) : number[] {
        let title = [];
        switch (bookType) {
            // Old and New Testament Only
            case 1:
                {
                    for(let i = 0; i <= (this._totalBook -1); i++) {
                        title.push(this.bookDetails[i].title);
                    }
                }
                break;
            // Old Testament Only
            case 2:
                {
                    for(let i = 0; i <= (this._totalBook - 28); i++) {
                        title.push(this.bookDetails[i].title);
                    }
                }
                break;
            // New Testament Only
            case 3:
                {
                    for(let i = this._totalOldBook; i <= (this._totalBook -1); i++) {
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

    clearAllDataForAllChapters(bookType : any) : number[] {
        return this.pushData(bookType, this._empty);
    }

    pushData(bookType : any, data : any) : any[] {
        let value = [];
        switch (bookType) {
            // Old and New 
            case 1:
                {
                    for (let i in this.bookDetails) {
                        value.push(data);
                    }
                    console.log("OUTPUT: Old and New Testament");
                    break;
                }
           // Old Testament Only
            case 2:
                {
                    for(let i = 0; i <= (this._totalBook - 28); i++) {
                        value.push(data);
                    }
                    console.log("OUTPUT: Old Testament");
                    break;
                }
            // New Testament Only
            case 3:
                {
                    for(let i = this._totalOldBook; i <= (this._totalBook -1); i++) {
                        value.push(data);
                    }
                    console.log("OUTPUT: New Testament");
                    break;
                }
            default:
                break;
        }
        console.log("PUSH DATA: "+ value);
        return value;
    }

    

    getBookTestamentById(bookId : number, bookType : any) {
        let testament : string;
        if(bookType == 1) {
            testament = this.bookDetails[bookId].testament;
        }
        if(bookType == 2) {
            testament = this.bookDetails[bookId].testament;
        }
        if(bookType == 3) {
            testament =  this.bookDetails[bookId + this._totalOldBook].testament;
        }
        console.log("getTestamentById" + testament);
        return testament;
    }
    

    /**
     * Random Data for Old and New
     */
    setRandomDataForAllChapters(bookType : any) : number[] {
        let chapter = [];
        let random_data = Math.round(Math.random() * 100);

        switch (bookType) {
            
            // Old and New Testament
            case 1:
                {
                    for (let i in this.bookDetails) {
                        chapter.push(random_data % this.bookDetails[i].chapters+1);
                    }
                    break;
                }
            // Old Testament Only
            case 2:
                {
                    for(let i = 0; i <= (this._totalBook - 28); i++) {
                        chapter.push(random_data % this.bookDetails[i].chapters+1);
                    }
                    break;
                }
            // New Testament Only
            case 3:
                {
                    for(let i = this._totalOldBook; i <= (this._totalBook -1); i++) {
                        chapter.push(random_data % (this.bookDetails[i].chapters+1));
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
     * --
     * --
     * --
     * Mock User Data
     */
    public getAllUserId() : string[] {
        let user = [];
        for(let i in this.bookUsers) {
            user.push(this.bookUsers[i].id);
        }
        console.log("Mock User: " + user);
        return user;
    }
    
    public getUserIdById(id: number) : string {
        let user = this.bookUsers[id].id;
        console.log(user);
        return user;
    }

    public getUserNameById(id: number) : string {
        let user = this.bookUsers[id].userName;
        console.log(user);
        return user;
    }

    public getUserEmailById(id: number) : string {
        let user = this.bookUsers[id].userEmail;
        console.log(user);
        return user;
    }

    public getUserStudiesBook() : string[] {
        let user = [];
        for(let i in this.bookUsers) {
            user.push(this.bookUsers[this.userId].studies[i].book);
        }
        console.log("Mock User: " + user);
        return user;
    }

    public getTotalDivisionsPerUserStudies() : string[] {
        let user = [];
        for(let i in this.bookUsers) {
            user.push(this.bookUsers[this.userId].studies[i].divisions.length);
        }
        console.log("Mock User: " + user);
        return user;
    }

    public getSetOfStatusPerPerDivisions(id: number) : boolean[] {
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