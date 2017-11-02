import { BibleData } from "./bible-data";


export class BibleDataService extends BibleData {

    private userId : number = null;

    /*
    constructor() { 
        super();
    }*/

    constructor() {
        super();
    }

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

    getAllChaptersOfOldAndNewTestament() : number[] {
        let chapters = [];
        for (let i in this.bookDetails) {
            chapters.push(this.bookDetails[i].chapters);
        }
        //console.log("ONT - All Chapter Result: " + chapters);
        return chapters;
    }

    getVerseByIdForOldAndNewTestament(id : number) : number[] {
        return this.bookDetails[id].verses;
    }

    getAllVersesOfOldAndNewTestament() : number[] {
        let verses = [];
        for (let i in this.bookDetails) {
            verses.push(this.bookDetails[i].verses);
        }
        //console.log("ONT - All Verses Result: " + verses);
        return verses;
    }
    
    getAllTitleOfOldAndNewTestament() : number[] {
        let title = [];
        for (let i in this.bookDetails) {
            title.push(this.bookDetails[i].title);
        }
        //console.log("ONT - All Title Result: " + title);
        return title;
    }

    getTitleByIdForOldAndNewTestament(id : number) : string {
        return this.bookDetails[id].book;
    }

    getTestamentByIdForOldAndNewTestament(id : number) : string {
        return this.bookDetails[id].testament;
    }


    /** 
     * OLD Testament 
     * 
     * 
     * 
     * */

    getAllAbbvOfOldTestament() : string[] {
        let book = [];
        for(let i = 0; i <= (this.bookDetails.length - 28); i++) {
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
        for(let i = 0; i <= (this.bookDetails.length - 28); i++) {
            chapters.push(this.bookDetails[i].chapters);
        }
        //console.log("OT - All Chapters Result: " + chapters);
        return chapters;
    }

    getAllVersesOfOldTestament() : number[] {
        let verses = [];
        for(let i = 0; i <= (this.bookDetails.length - 28); i++) {
            verses.push(this.bookDetails[i].verses);
        }
        //console.log("OT - All Verses Result: " + verses);
        return verses;
    }
    
    getAllTitleOfOldTestament() : number[] {
        let title = [];
        for(let i = 0; i <= (this.bookDetails.length - 28); i++) {
            title.push(this.bookDetails[i].title);
        }
        //console.log("OT - All Title Result: " + title);
        return title;
    }

    getTitleByIdForOldTestament(id : number) : string {
        return this.bookDetails[id].book;
    }
    
    getTestamentByIdForOldTestament(id : number) : string {
        return this.bookDetails[id].testament;
    }


    /** 
     * NEW Testament 
     * 
     * 
     * */

    getAllAbbvOfNewTestament() : string[] {
        let book = [];
        for(let i = 39; i <= (this.bookDetails.length -1); i++) {
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
        for(let i = 39; i <= (this.bookDetails.length -1); i++) {
            chapters.push(this.bookDetails[i].chapters);
        }
        //console.log("NT - All Chapters Result: " + chapters);
        return chapters;
    }

    getAllVersesOfNewTestament() : number[] {
        let verses = [];
        for(let i = 39; i <= (this.bookDetails.length -1); i++) {
            verses.push(this.bookDetails[i].verses);
        }
        //console.log("NT - All Verses Result: " + verses);
        return verses;
    }
    
    getAllTitleOfNewTestament() : number[] {
        let title = [];
        for(let i = 39; i <= (this.bookDetails.length -1); i++) {
            title.push(this.bookDetails[i].title);
        }
        //console.log("NT - All Title Result: " + title);
        return title;
    }

    getTitleByIdForNewTestament(id : number) : string {
        return this.bookDetails[id + 39].book;
    }
    
    getTestamentByIdForNewTestament(id : number) : string {
        return this.bookDetails[id + 39].testament;
    }


    
    /**
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