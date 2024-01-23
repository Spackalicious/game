import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent implements OnInit {
  @Input() number: number; //with @Input, we can pass the number from outside and into this component.

  constructor() { }

  ngOnInit() {

  }
}
