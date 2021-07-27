import { Component, OnInit } from '@angular/core';

interface CarInterface{
  brand: string;
  countryoforigin: string;
  yearofpurchase: number;

}

const CarArray: CarInterface[]=[
  {
    brand: 'McLaren',
    countryoforigin: 'UK',
    yearofpurchase: 2020,
  },
  {
    brand: 'Renault',
    countryoforigin: 'France',
    yearofpurchase: 2019,
  },
  {
    brand: 'Ferrari',
    countryoforigin: 'Italy',
    yearofpurchase: 2021,
  }
   {
    brand: 'Honda',
    countryoforigin: 'Japan',
    yearofpurchase: 2020,
  }
]

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
containCarArray = CarArray;
}
