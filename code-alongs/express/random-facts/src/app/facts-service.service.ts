import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactsServiceService {

  constructor(public http : HttpClient) { }

  getFacts() {
    return this.http
      .get("http://localhost:3000/facts/all", 
        { responseType: "json"}
      );
  }
  
  addFact(newFact) {
    return this.http
      .post("http://localhost:3000/facts", 
        { fact: newFact }, 
        { responseType: "json"}
      );
  }
}
