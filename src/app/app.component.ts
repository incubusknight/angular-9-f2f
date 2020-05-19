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
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
}
