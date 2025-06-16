export interface InterventionInfo {
    ID: number,
    name: string;
    duration: string;
    price: number;
  }
  
export const interventions : InterventionInfo[] = [
    {
        ID: 0,
        name: "Detartrasi",
        duration: "30 minuti",
        price: 70
    },
    {
        ID: 1,
        name: "Otturazione",
        duration: "1 ora",
        price: 200
    },
    {
        ID: 2,
        name: "Devitalizzazione",
        duration: "1 ora e 30 minuti",
        price: 150
    },
    {
        ID: 3,
        name: "Diagnosi",
        duration: "30 minuti",
        price: 30
    }
]