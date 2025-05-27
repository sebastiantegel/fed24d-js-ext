export class Person {
  id: number;
  name: string;
  age: number;
  isMarried: boolean;

  constructor(id: number, name: string, age: number, isMarried: boolean) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
}
