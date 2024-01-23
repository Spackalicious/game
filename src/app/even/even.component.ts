import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent implements OnInit {
  @Input() number: number; //with @Input, we can pass the number from outside and into this component.

  constructor() { }

  ngOnInit() {

  }
}
