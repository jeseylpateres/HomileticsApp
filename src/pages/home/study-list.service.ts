import { Injectable } from "@angular/core";

import { BookType } from "../core/enums/booktype";
import { User } from "../model/user/user";
import { Users } from "../model/user/user-mock";

@Injectable()
export class StudyListService {

    /**
     * Get Users
     */
    getUser(): User[] {
        return Users;
    }

    public getAllUserId(): string[] {
        let user = [];
        for (let i in Users) {
            user.push(Users[i].id);
        }
        console.log("Mock User: " + user);
        return user;
    }

    public getUserIdById(id: number): number {
        let user = Users[id].id;
        console.log(user);
        return user;
    }

    public getUserNameById(id: number): string {
        let user = Users[id].userName;
        console.log(user);
        return user;
    }

    public getUserEmailById(id: number): string {
        let user = Users[id].userEmail;
        console.log(user);
        return user;
    }

    public getUserStudiesBook(id: number): string[] {
        let user = [];
        for (let i in Users) {
            user.push(Users[id].studies[i].book);
        }
        console.log("Mock User: " + user);
        return user;
    }

    public getTotalDivisionsPerUserStudies(id: number): string[] {
        let user = [];
        for (let i in Users) {
            user.push(Users[id].studies[i].divisions.length);
        }
        console.log("Mock User: " + user);
        return user;
    }
    /*
        public getSetOfStatusPerPerDivisions(id: number): boolean[] {
            let user = [];
            //user.push(this.bookUser[Users].studies[0].divisions.length);
            user.push(this.bookUsers[Users].studies[0].divisions[0].verseContents.length);
            
                    for(let i = 0; i <= (this.bookUser[Users].studies.length); i++) {
                        for(let j = 0; j <= (this.bookUser[Users].studies[i].divisions.length); j++) {
                            //if(this.bookUser[this.userId].studies[i].bookId == id) {
                                user.push(this.bookUser[this.userId].studies[i].divisions[j].status);
                            //}
                        }
                    }
            console.log("getSetOfStatusPerPerDivisions Result: " + user);
            return user;
        }
    */
}