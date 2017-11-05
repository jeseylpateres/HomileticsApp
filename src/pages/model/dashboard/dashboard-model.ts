export class Dashboard {
    constructor(
        public completeStudies?: number,
        public ongoingStudies?: number,
        public ongoingQuizes?: number,

        public bookTotalStudies?: number,
        public percentageCompletion?: number,
        public bookTestament?: string,
        public bookTitle?: string,
    ) {}
}