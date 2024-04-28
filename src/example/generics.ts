// EXAMPLE: 1 
type StringArray = Array<string>;
const gradeArray: StringArray = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log({
    length: gradeArray.length,
    firstItem: gradeArray[0]
})
 
// EXAMPLE: 2 
type Human = {
    fullname: string;
    age: number;
    phone?: string;
}

type HumanArray = Array<Human>;

const listHuman: HumanArray = [
    {
        fullname: 'Pham Quoc Vy',
        age: 24,
        phone: '0974594611',
    },
    {
        fullname: 'Phan Thi Van Anh',
        age: 24,
        phone: '0982431615',
    },
    {
        fullname: 'Pham Phan Yen Dan',
        age: 5,
    }
]

console.log(listHuman);

// EXAMPLE: 3 
interface Action<type> {
    sing: (song: string) => type;
    exercising: () => void;
}