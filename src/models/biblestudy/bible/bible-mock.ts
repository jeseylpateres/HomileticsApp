import { Bible } from "./bible.model";


export const BibleBook: Bible[] = [
    {
        id: 1,
        book: "Genesis",
        abbv: "Gen",
        title: "The First Book of Moses Called Genesis",
        testament: "Old Testament",
        chapters: 50,
        verses: [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 54, 33, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26]
    }
    , {
        id: 2,
        book: "Exodus",
        abbv: "Exo",
        title: "The Second Book of Moses Called Exodus",
        testament: "Old Testament",
        chapters: 40,
        verses: [22, 25, 22, 31, 23, 30, 29, 28, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 37, 30, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38]
    }
    , {
        id: 3,
        book: "Leviticus",
        abbv: "Lev",
        title: "The Third Book of Moses Called Leviticus",
        testament: "Old Testament",
        chapters: 27,
        verses: [17, 16, 17, 35, 26, 23, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34]
    }
    , {
        id: 4,
        book: "Numbers",
        abbv: "Num",
        title: "The Fourth Book of Moses Called Numbers",
        testament: "Old Testament",
        chapters: 36,
        verses: [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 28, 32, 22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13]
    }
    , {
        id: 5,
        book: "Deuteronomy",
        abbv: "Deu",
        title: "The Fifth Book of Moses Called Deuteronomy",
        testament: "Old Testament",
        chapters: 34,
        verses: [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 31, 19, 29, 23, 22, 20, 22, 21, 20, 23, 29, 26, 22, 19, 19, 26, 69, 28, 20, 30, 52, 29, 12]
    }

    , {
        id: 6,
        book: "Joshua",
        abbv: "Jos",
        title: "The Book of Joshua",
        testament: "Old Testament",
        chapters: 24,
        verses: [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33]
    }
    , {
        id: 7,
        book: "Judges",
        abbv: "Jud",
        title: "The Book of Judges",
        testament: "Old Testament",
        chapters: 21,
        verses: [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25]
    }
    , {
        id: 8,
        book: "Ruth",
        abbv: "Rut",
        title: "The Book of Ruth",
        testament: "Old Testament",
        chapters: 4,
        verses: [22, 23, 18, 22]
    }
    , {
        id: 9,
        book: "1 Samuel",
        abbv: "1Sa",
        title: "The First Book of Samuel",
        testament: "Old Testament",
        chapters: 31,
        verses: [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 42, 16, 23, 28, 23, 43, 25, 12, 25, 11, 31, 13]
    }
    , {
        id: 10,
        book: "2 Samuel",
        abbv: "2Sa",
        title: "The Second Book of Samuel",
        testament: "Old Testament",
        chapters: 24,
        verses: [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 32, 44, 26, 22, 51, 39, 25]
    }
    , {
        id: 11,
        book: "1 Kings",
        abbv: "1 Ki",
        title: "The First Book of Kings",
        testament: "Old Testament",
        chapters: 22,
        verses: [53, 46, 28, 20, 32, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 54]
    }
    , {
        id: 12,
        book: "2 Kings",
        abbv: "2 Ki",
        title: "The Second Book of Kings",
        testament: "Old Testament",
        chapters: 25,
        verses: [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 20, 22, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30]
    }
    , {
        id: 13,
        book: "1 Chronicles",
        abbv: "1 Ch",
        title: "The First Book of Chronicles",
        testament: "Old Testament",
        chapters: 29,
        verses: [54, 55, 24, 43, 41, 66, 40, 40, 44, 14, 47, 41, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30]
    }
    , {
        id: 14,
        book: "2 Chronicles",
        abbv: "2 Ch",
        title: "The Second Book of Chronicles",
        testament: "Old Testament",
        chapters: 36,
        verses: [18, 17, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 23, 14, 19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 26, 23]
    }
    , {
        id: 15,
        book: "Ezra",
        abbv: "Ezr",
        title: "The Book of Ezra",
        testament: "Old Testament",
        chapters: 10,
        verses: [11, 70, 13, 24, 17, 22, 28, 36, 15, 44]
    }
    , {
        id: 16,
        book: "Nehemiah",
        abbv: "Neh",
        title: "The Book of Nehemiah",
        testament: "Old Testament",
        chapters: 13,
        verses: [11, 20, 38, 17, 19, 19, 72, 18, 37, 40, 36, 47, 31]
    }
    , {
        id: 17,
        book: "Esther",
        abbv: "Est",
        title: "The Book of Esther",
        testament: "Old Testament",
        chapters: 10,
        verses: [22, 23, 15, 17, 14, 14, 10, 17, 32, 3, 17, 8, 30, 16, 24, 10]
    }
    , {
        id: 18,
        book: "Job",
        abbv: "Job",
        title: "The Book of Job",
        testament: "Old Testament",
        chapters: 42,
        verses: [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 32, 26, 17]
    }
    , {
        id: 19,
        book: "Psalms",
        abbv: "Psa",
        title: "The Book of Psalms",
        testament: "Old Testament",
        chapters: 150,
        verses: [6, 12, 8, 8, 12, 10, 17, 18, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13, 31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17, 13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12, 8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 28, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8, 28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 179, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 13, 10, 7, 12, 15, 21, 10, 20, 14, 9, 6]
    }
    , {
        id: 20,
        book: "Proverbs",
        abbv: "Pro",
        title: "The Book of Proverbs",
        testament: "Old Testament",
        chapters: 31,
        verses: [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31]
    }
    , {
        id: 21,
        book: "Ecclesiastes",
        abbv: "Ecc",
        title: "The Book of Ecclesiastes",
        testament: "Old Testament",
        chapters: 12,
        verses: [18, 26, 22, 17, 19, 12, 29, 17, 18, 20, 10, 14]
    }
    , {
        id: 22,
        book: "Song of Solomon",
        abbv: "Son",
        title: "The Song of Songs",
        testament: "Old Testament",
        chapters: 8,
        verses: [17, 17, 11, 16, 16, 12, 14, 14]
    }
    , {
        id: 23,
        book: "Isaiah",
        abbv: "Isa",
        title: "The Book of Isaiah",
        testament: "Old Testament",
        chapters: 66,
        verses: [31, 22, 26, 6, 30, 13, 25, 23, 20, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 11, 25, 24]
    }
    , {
        id: 24,
        book: "Jeremiah",
        abbv: "Jer",
        title: "The Book of Jeremiah",
        testament: "Old Testament",
        chapters: 52,
        verses: [19, 37, 25, 31, 31, 30, 34, 23, 25, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34]
    }
    , {
        id: 25,
        book: "Lamentations",
        abbv: "Lam",
        title: "The Book of Lamentations",
        testament: "Old Testament",
        chapters: 5,
        verses: [22, 22, 66, 22, 22]
    }
    , {
        id: 26,
        book: "Ezekiel",
        abbv: "Eze",
        title: "The Book of Ezekiel",
        testament: "Old Testament",
        chapters: 48,
        verses: [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 44, 37, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35]
    }
    , {
        id: 27,
        book: "Daniel",
        abbv: "Dan",
        title: "The Book of Daniel",
        testament: "Old Testament",
        chapters: 12,
        verses: [21, 49, 100, 34, 30, 29, 28, 27, 27, 21, 45, 13, 64, 42]
    }
    , {
        id: 28,
        book: "Hosea",
        abbv: "Hos",
        title: "The Book of Hosea",
        testament: "Old Testament",
        chapters: 14,
        verses: [9, 25, 5, 19, 15, 11, 16, 14, 17, 15, 11, 15, 15, 10]
    }
    , {
        id: 29,
        book: "Joel",
        abbv: "Joe",
        title: "The Book of Joel",
        testament: "Old Testament",
        chapters: 3,
        verses: [20, 27, 5, 21]
    }
    , {
        id: 30,
        book: "Amos",
        abbv: "Amo",
        title: "The Book of Amos",
        testament: "Old Testament",
        chapters: 9,
        verses: [15, 16, 15, 13, 27, 14, 17, 14, 15]
    }
    , {
        id: 31,
        book: "Obadiah",
        abbv: "Oba",
        title: "The Book of Obadiah",
        testament: "Old Testament",
        chapters: 1,
        verses: [21]
    }
    , {
        id: 32,
        book: "Jonah",
        abbv: "Jon",
        title: "The Book of Jonah",
        testament: "Old Testament",
        chapters: 4,
        verses: [16, 11, 10, 11]
    }
    , {
        id: 33,
        book: "Micah",
        abbv: "Mic",
        title: "The Book of Micah",
        testament: "Old Testament",
        chapters: 7,
        verses: [16, 13, 12, 14, 14, 16, 20]
    }
    , {
        id: 34,
        book: "Nahum",
        abbv: "Nah",
        title: "The Book of Nahum",
        testament: "Old Testament",
        chapters: 3,
        verses: [14, 14, 19]
    }
    , {
        id: 35,
        book: "Habakkuk",
        abbv: "Hab",
        title: "The Book of Habakkuk",
        testament: "Old Testament",
        chapters: 3,
        verses: [17, 20, 19]
    }
    , {
        id: 36,
        book: "Zephaniah",
        abbv: "Zep",
        title: "The Book of Zephaniah",
        testament: "Old Testament",
        chapters: 3,
        verses: [18, 15, 20]
    }
    , {
        id: 37,
        book: "Haggai",
        abbv: "Hag",
        title: "The Book of Haggai",
        testament: "Old Testament",
        chapters: 2,
        verses: [15, 23]
    }
    , {
        id: 38,
        book: "Zechariah",
        abbv: "Zech",
        title: "The Book of Zechariah",
        testament: "Old Testament",
        chapters: 14,
        verses: [17, 17, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21]
    }
    , {
        id: 39,
        book: "Malachi",
        abbv: "Mal",
        title: "The Book of Malachi",
        testament: "Old Testament",
        chapters: 4,
        verses: [14, 17, 18, 6]
    }
    , {
        id: 40,
        book: "Matthew",
        abbv: "Mat",
        title: "The Gospel According to Matthew",
        testament: "New Testament",
        chapters: 28,
        verses: [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20]
    }
    , {
        id: 41,
        book: "Mark",
        abbv: "Mar",
        title: "The Gospel According to Mark",
        testament: "New Testament",
        chapters: 16,
        verses: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20]
    }
    , {
        id: 42,
        book: "Luke",
        abbv: "Luk",
        title: "The Gospel According to Luke",
        testament: "New Testament",
        chapters: 24,
        verses: [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53]
    }
    , {
        id: 43,
        book: "John",
        abbv: "Joh",
        title: "The Gospel According to John",
        testament: "New Testament",
        chapters: 21,
        verses: [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25]
    }
    , {
        id: 44,
        book: "Acts",
        abbv: "Act",
        title: "The Acts of the Apostles",
        testament: "New Testament",
        chapters: 28,
        verses: [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 40, 38, 40, 30, 35, 27, 27, 32, 44, 31]
    }
    , {
        id: 45,
        book: "Romans",
        abbv: "Rom",
        title: "The Epistle of Paul to the Romans",
        testament: "New Testament",
        chapters: 16,
        verses: [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27]
    }
    , {
        id: 46,
        book: "1 Corinthians",
        abbv: "1 Co",
        title: "The First Epistle of Paul to the Corinthians",
        testament: "New Testament",
        chapters: 16,
        verses: [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24]
    }
    , {
        id: 47,
        book: "2 Corinthians",
        abbv: "2 Co",
        title: "The Second Epistle of Paul to the Corinthians",
        testament: "New Testament",
        chapters: 13,
        verses: [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 13]
    }
    , {
        id: 48,
        book: "Galatians",
        abbv: "Gal",
        title: "The Epistle of Paul to the Galatians",
        testament: "New Testament",
        chapters: 6,
        verses: [24, 21, 29, 31, 26, 18]
    }
    , {
        id: 49,
        book: "Ephesians",
        abbv: "Eph",
        title: "The Epistle of Paul to the Ephesians",
        testament: "New Testament",
        chapters: 6,
        verses: [23, 22, 21, 32, 33, 24]
    }
    , {
        id: 50,
        book: "Philippians",
        abbv: "Phil",
        title: "The Epistle of Paul to the Philippians",
        testament: "New Testament",
        chapters: 4,
        verses: [30, 30, 21, 23]
    }
    , {
        id: 51,
        book: "Colossians",
        abbv: "Col",
        title: "The Epistle of Paul to the Colossians",
        testament: "New Testament",
        chapters: 4,
        verses: [29, 23, 25, 18]
    }
    , {
        id: 52,
        book: "1 Thessalonians",
        abbv: "1 Th",
        title: "The First Epistle of Paul to the Thessalonians",
        testament: "New Testament",
        chapters: 5,
        verses: [10, 20, 13, 18, 28]
    }
    , {
        id: 53,
        book: "2 Thessalonians",
        abbv: "2 Th",
        title: "The Second Epistle of Paul to the Thessalonians",
        testament: "New Testament",
        chapters: 3,
        verses: [12, 17, 18]
    }
    , {
        id: 54,
        book: "1 Timothy",
        abbv: "1 Ti",
        title: "The First Epistle of Paul to Timothy",
        testament: "New Testament",
        chapters: 6,
        verses: [20, 15, 16, 16, 25, 21]
    }
    , {
        id: 55,
        book: "2 Timothy",
        abbv: "2 Ti",
        title: "The Second Epistle of Paul to Timothy",
        testament: "New Testament",
        chapters: 4,
        verses: [18, 26, 17, 22]
    }
    , {
        id: 56,
        book: "Titus",
        abbv: "Tit",
        title: "The Epistle of Paul to Titus",
        testament: "New Testament",
        chapters: 3,
        verses: [16, 15, 15]
    }
    , {
        id: 57,
        book: "Philemon",
        abbv: "Phm",
        title: "The Epistle of Paul to Philemon",
        testament: "New Testament",
        chapters: 4,
        verses: [25]
    }
    , {
        id: 58,
        book: "Hebrews",
        abbv: "Heb",
        title: "The Epistle to the Hebrews",
        testament: "New Testament",
        chapters: 13,
        verses: [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25]
    }
    , {
        id: 59,
        book: "James",
        abbv: "Jam",
        title: "The General Epistle of James",
        testament: "New Testament",
        chapters: 5,
        verses: [27, 26, 18, 17, 20]
    }
    , {
        id: 60,
        book: "1 Peter",
        abbv: "1 Pe",
        title: "The First Epistle of Peter",
        testament: "New Testament",
        chapters: 5,
        verses: [25, 25, 22, 19, 14]
    }
    , {
        id: 61,
        book: "2 Peter",
        abbv: "2 Pe",
        title: "The Second Epistle of Peter",
        testament: "New Testament",
        chapters: 3,
        verses: [21, 22, 18]
    }
    , {
        id: 62,
        book: "1 John",
        abbv: "1 Jo",
        title: "The First Epistle of John",
        testament: "New Testament",
        chapters: 5,
        verses: [10, 29, 24, 21, 21]
    }
    , {
        id: 63,
        book: "2 John",
        abbv: "2 Jo",
        title: "The Second Epistle of John",
        testament: "New Testament",
        chapters: 1,
        verses: [13]
    }
    , {
        id: 64,
        book: "3 John",
        abbv: "3 Jo",
        title: "The Third Epistle of John",
        testament: "New Testament",
        chapters: 1,
        verses: [15]
    }
    , {
        id: 65,
        book: "Jude",
        abbv: "Jud",
        title: "The Epistle of Jude",
        testament: "New Testament",
        chapters: 1,
        verses: [25]
    }
    , {
        id: 66,
        book: "Revelation",
        abbv: "Rev",
        title: "The Apocalypse of John",
        testament: "New Testament",
        chapters: 22,
        verses: [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21]
    }
];