// Explicit Types: là type mà khai báo kiểu dữ liệu đầy đủ
const num: number = 10;
const myName: string = 'Quoc Vy';

type Person = {
    fullname: string;
    age: number;
    phone: string;
}

const mySister: Person = {
    fullname: 'Pham My',
    age: 15,
    phone: '0123456789'
}

// Inferred Types: là type mà TS sẽ tự động suy ra kiểu dữ liệu
const policeName = 'Justin';
const policeAge = 30;

/**
 * Type Alias
 */
type Student = {
    readonly id: string; // just readonly
    fullname: string;
    phone: string;
    age?: number; // optional
}

/**
 * Interface
 */
interface StudentInterface {
    readonly id: string; // just readonly
    fullname: string;
    phone: string;
    age?: number; // optional
}

const StudentA: Student = {
    id: 'student_001',
    fullname: 'Pham Quoc Vy',
    phone: '09811112',
}

/**
 * Union Type: you can declare one or more type for variable by Union Type
 */
let totalNumber: number | string = 100;
totalNumber = '100';
let GRADE: 'A' | 'B' | 'C' = 'A';

/**
 * Intersection Type: you can declare variable with combine many type together
 * Lưu ý: Nếu trong trường hợp Intersection nhiều Type lại với nhau mà các kiểu này có cùng field thì bắt buộc các field này phải có cùng Type
 */
interface IdentifyInfo {
    personalID: string;
    fullname: string;
    homeTown: string;
}

interface StudyInfo {
    scoolName: string;
    academyLevel: string;
}

type People = IdentifyInfo & StudyInfo;
interface PeopleAnother extends IdentifyInfo, StudyInfo {}

const peopleA: People = {
    personalID: '0722000000',
    fullname: 'PQV',
    homeTown: 'Viet Nam',
    scoolName: 'PTIT',
    academyLevel: 'Graduated as an engineer',
}

const peopleB: PeopleAnother = {
    personalID: '0722000000',
    fullname: 'PQV',
    homeTown: 'Viet Nam',
    scoolName: 'PTIT',
    academyLevel: 'Graduated as an engineer',
}

/**
 * Add new Prop
 * Lưu ý: Khi sử dụng interface thì có thể redeclare type để add new prop còn type thì không thể 
 */
interface Animal {
    name: string;
    type: '4 legs' | '2 legs'
}

interface Animal {
    isRareAnimals?: boolean;
}

type AnimalType = {
    name: string;
    type: '4 legs' | '2 legs'
}

// type AnimalType {
//     isRareAnimals?: boolean;
// } => Error: Duplicate identifier 'AnimalType'.

/**
 * ENUM TYPES 
 */
enum STATUS {
    PROCESSING, // 0
    PENDING, // 1
    FAILED, // 2
    SUCCESS, // 3
}

enum STATE {
    PROCESSING = 'PROCESSING',
    PENDING = 'PENDING',
    FAILED = 'FAILED',
    SUCCESS = 'SUCCESS',
}

/**
 * GENERICS TYPES
 */
interface List<Type> {
    length: number;
    [index: number]: Type;
}

const wordList: List<string> = ['A', 'B'];
const numberList: List<number> = [1, 2];
console.log(wordList.length)