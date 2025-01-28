
const BuildingEntry = process.argv[2];

interface FloorLayout {
    monthly_rent: number,
    orientations: string[]
}

interface Building {
    height: number,
    floor_layout: FloorLayout[]
}

const apartements: Building[] = JSON.parse(BuildingEntry);

console.log(apartements);