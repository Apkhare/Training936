import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }
  employee: any[] = [
    {"name":"Rama","age":"20","dept":"HR"},
    {"name":"Raja","age":"21","dept":"AI"},
    {"name":"Amay","age":"22","dept":"Admin"},
    {"name":"Yana","age":"21","dept":"Tech"},
    {"name":"Mina","age":"23","dept":"Finance"}
  ];

  
  
  ngOnInit(): void {
  }

}
