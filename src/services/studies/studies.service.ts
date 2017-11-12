export class StudiesService {
    
    private studies: {title: string}[] = [];
   
    addStudy(study: {title: string}) {
        //console.log("Service Set Result: "+study);
        this.studies.push(study);
    }

    // new array not reference studies
    getStudies() {
        //console.log("Service Get Result: "+ this.studies);
        return this.studies.slice();
    }

}