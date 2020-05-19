/**
 Counting Cars

 Make the following changes to complete the Counting Cars application:

 1. Using the "companies" data array below, initialize the initial state of the App component.
    companies: [
      { name: 'Ford', cars: 4 },
      { name: 'GM', cars: 3 },
      { name: 'Chrysler', cars: 0 }
    ]

  2. Create a new Company component to display the company's name and number of cars

  3. Update the App component to use the new Company component to display the company info of all of the companies.

  4. Update the App component so it shows the current total of all cars for all companies in the "Total Cars" field.

  5. Update the "Reset" button on the App component to reset the count of cars to zero for all companies

  6. Update the "Reset" button so it only shows if the total count of cars is greater than zero.

  7. (Bonus if there's time) Discuss how you might implement "+" and "-" buttons in the company component to increment and decrement the number of cars for that company.
 */

import { Component, OnInit } from '@angular/core';
import { Company } from './model/company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  companies: Company[] = [];
  // Also acceptable to use 'any' instead of using defined Company model, like: companies: any[] = [];
  // However, it shows a great level of care when model class is used, or at least mentioned that
  // 'he would do it like that, but in the interest of time'

  totalCars: number = 0;

  ngOnInit() {
    this.companies = [
      new Company('Ford', 4),
      new Company('GM', 3),
      new Company('Chrysler') // Company constructor defaults cars to 0 when not specified
    ];
    this.refreshTotalCars();
  }
  // Also acceptable for this test to use constructor (instead of ngOnInit) to inititialize state
  // constructor() { ... same thing as ngOnInit ... }

  refreshTotalCars() {
    this.totalCars = this.companies
      // Gets array of car counts
      .map(company => company.cars)
      // Reduces the number array to sum of all elements
      .reduce((total, amt) => total + amt);
  }

  resetAllCompanyCars() {
    this.companies.forEach(company => { company.cars = 0; });
    this.refreshTotalCars();
  }
}
