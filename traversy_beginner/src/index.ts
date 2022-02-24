//In the Terminal type -> tsc --init to get the tsconfig.json file to be created
let num: number = 4;
let company: string = "AltaraZ media";
const publish: boolean = true;
//THIS will allow any type
const x: any = "hey";

//Arrays

//an array that will only contain numbers
let ids: number[] = [1, 2, 3, 4, 5];

//can't push non numbers to this array!
ids.push("hello");

//ANY types
const idAny: any[] = ["hello", 6, true];

//specific multiple types TUPLE!
//must be in the order indicated!
const person: [number, string, boolean] = [1, "helen", true];

//TUPLE array
//add the square brackets to the end after[]
let tupArr: [number, string][];

tupArr = [
  [1, "red"],
  [2, "blue"],
  [3, "green"],
  [7, "purple"],
];

//UNION
//multiple types separated by |
let unionExample: string | number;

unionExample = "22";

//ENUM -- find out more about it

//OBJECTS -- initial example below, beneath that there is a cleaner version

// const user: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "bob ",
// };

//Like an Interface!
type User = {
  id: number;
  name: string;
};

const userOne: User = {
  id: 7,
  name: "Roberta",
};

//Type assertion

let cid: any = 1;
let customerId = cid as number;

//FUNCTIONS
//each argument and the return value all need types
function addNum(x: number, y: number): number {
  return x + y;
}

//if there is no return value, the function will not return
//VOID when nothing is returned!!
function logging(message: string | number): void {
  console.log(message);
}

//INTERFACES -- much like types(above), but with no equal sign
interface UserInterface {
  //readonly will not be not change later
  readonly id: number;
  name: string;
  //the ? makes it an optional item in the object
  age?: number;
}

const user2: UserInterface = {
  id: 8,
  name: "Jeanette",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x + y;

//Classes

class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // a method that will run when the class is called
  register() {
    return "${this.name} is now registered";
  }
}

const mike = new Person(1, "blaster");
const john = new Person(7, "protected");
