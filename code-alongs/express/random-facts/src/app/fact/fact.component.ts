import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {

  @Input() fact: string;

  constructor() { }

  ngOnInit() {
  }

}
