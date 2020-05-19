import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../model/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  @Input()
  company: Company; // 'any' can also be used if no Company model is defined

  // Bonus round implementation (from this point on)
  // ***********************************************
  @Output()
  update = new EventEmitter<any>();

  // Candidate could create one function to add, and another to remove.
  // I'll go ahead and support an increment parameter that can be set to negative numbers.
  // If increment is not set, it defaults to 1
  addCars(increment: number = 1) {
    this.company.cars += increment;
    this.company.cars = Math.max(this.company.cars, 0); // Make sure never goes below 0

    // Execute update event if specified
    this.update?.emit();
    // Using optional chaining with question mark, also acceptable:
    // if (this.update) { this.update.emit(); }
    // Also acceptable to use the OnChanges interface
  }

}
