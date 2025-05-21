export class Person {
  name: string;
  age: number;
  isMarried: boolean;

  constructor(name: string, age: number, isMarried: boolean) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
}

//erasableSyntaxOnly: false

// export class Person {
//   constructor(
//     public name: string,
//     public age: number,
//     public isMarried: boolean,
//   ) {}
// }
