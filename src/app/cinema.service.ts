import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyInterface } from './MyInterface';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public host: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }
  getVilles() {
    return this.http.get<MyInterface>(this.host + "/villes");

  }
  getCinema(v) {
    return this.http.get(v._links.cinema.href);
  }
  getSalles(c){
    return this.http.get(c._links.salles.href);
  }
  getProjections(salle:any){
    let url=salle._links.projections.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p1");
  }
}
