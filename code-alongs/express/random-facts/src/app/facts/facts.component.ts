import { Component, OnInit } from '@angular/core';
import { FactsServiceService } from '../facts-service.service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  constructor(public service : FactsServiceService) { }
  facts : any[] = [];
 
  ngOnInit() {
    this.getFacts();
  }

  getFacts() {
    this.service.getFacts().subscribe( (facts : any) => {
      console.log(facts);
      this.facts = facts;
    });
  }

  addFact() {
    this.service.addFact("The button was clicked").subscribe(_ =>{
      this.getFacts();
    })
  }

}
