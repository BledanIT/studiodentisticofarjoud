export interface DentistInfo {
    ID: number;
    qualifier: string,
    firstName: string,
    lastName: string,
    age: number,
    birthday: Date,
    workYears: number,
    workStart: Date,
    description: string
}

export const dentists : DentistInfo[] = [
    {
        ID: 0,
        qualifier: "Dott.",
        firstName: "Farhad",
        lastName: "Farjoud",
        age: 70,
        birthday: new Date(54, 9, 22),
        workYears: 42,
        workStart: new Date(88, 0, 1),
        description: "Capofamiglia e iniziatore dell'attività, dentista rinomato e con solida esperienza quarantennale."
    },
    {
        ID: 1,
        qualifier: "Dott.",
        firstName: "Mattia",
        lastName: "Farjoud",
        age: 35,
        birthday: new Date(89, 8, 29),
        workYears: 8,
        workStart: new Date(17, 0, 1),
        description: "Primogenito del Dott. Farhad Farjoud, ha conseguito la laurea in Spagna e da molti anni lavora in società con il padre."
    },
    {
        ID: 2,
        qualifier: "Dott.ssa",
        firstName: "Giada",
        lastName: "Farjoud",
        age: 30,
        birthday: new Date(93, 5, 24),
        workYears: 3,
        workStart: new Date(22, 0, 1),
        description: "Secondogenita del Dott. Farhad Farjoud, ha conseguito la laurea in Spagna e da qualche anno lavora in società con il padre."
    },
]