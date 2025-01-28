"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var emploiDuTemps = process.argv[2];
// Idée pour le réaliser => faire un tableau associatif sur 24h, passer dans chaque valeur du tableau d'horaire en puis ajouter 1 dans le tableau associatif pour chaque heure ou le cours occupe une salle
function calculEmploiDuTemps(file) {
    var tmp = new Array(24).fill(0);
    var horaireInt;
    file.forEach(function (horaire) {
        horaireInt = parseInt(horaire.start.split(':')[0], 10);
        for (var i = horaireInt; i < parseInt(horaire.end.split(':')[0], 10); i++) {
            tmp[i] = tmp[i] + 1;
        }
    });
    console.log(tmp);
    return Math.max.apply(Math, tmp);
}
var fileContent = JSON.parse(fs.readFileSync(emploiDuTemps, "utf8"));
console.log(fileContent);
console.log(calculEmploiDuTemps(fileContent));
