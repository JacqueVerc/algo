
const argu = process.argv;

interface FloorLayout {
    monthly_rent: number,
    orientations: string[]
}

interface Building {
    height: number,
    floor_layout: FloorLayout[]
}

const apartements: Building[] = JSON.parse(argu[2]);

console.log(apartements);