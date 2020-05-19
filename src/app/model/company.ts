export class Company {
  name: string;
  cars: number;

  constructor(name: string, cars: number = 0) {
    this.name = name;
    this.cars = cars;
  }
}