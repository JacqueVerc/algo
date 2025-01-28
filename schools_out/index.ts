import * as fs from "fs";

const emploiDuTemps: string = process.argv[2];

interface Horaire {
    start: string,
    end: string;
    session_name: string,
    teacher_name: string
}

// Idée pour le réaliser => faire un tableau associatif sur 24h, passer dans chaque valeur du tableau d'horaire en puis ajouter 1 dans le tableau associatif pour chaque heure ou le cours occupe une salle
function calculEmploiDuTemps(file: Horaire[]): number {
    const tmp: number[] = new Array(24).fill(0);
    let horaireInt: number;
    file.forEach((horaire) => {
        horaireInt = parseInt(horaire.start.split(':')[0], 10);
        for (let i = horaireInt; i < parseInt(horaire.end.split(':')[0], 10); i++) {
            tmp[i] = tmp[i] + 1;
        }
    })
    return Math.max(...tmp);
}

const fileContent: Horaire[] = JSON.parse(fs.readFileSync(emploiDuTemps, "utf8"));

console.log(calculEmploiDuTemps(fileContent));