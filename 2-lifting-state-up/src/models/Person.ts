export class Person {
  id: number;
  name: string;
  age: number;
  isMarried: boolean;
  inEdit: boolean;

  constructor(name: string, age: number, isMarried: boolean) {
    this.id = Date.now();
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.inEdit = false;
  }
}
