import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyInterface } from './MyInterface';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public host:string="http://localhost:8080"

  constructor(private http:HttpClient) { }
  getVilles(){
    return this.http.get<MyInterface>(this.host+"/villes");

}
getCinema(v){
  return this.http.get(v.links.cinema.href);
}
}
