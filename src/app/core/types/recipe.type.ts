export type Recipe = {
    name: string,
    id: number,
    category: string,
    imagePath: string[],
    shortDescr: string,
    longDescr: string,
    ingredients: string[],
    directions: string[]
}