
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

 public villes;public cinema;
 

  constructor(private cinemaService:CinemaService, private titre: Title ) { }
  
  ngOnInit(): void {
   this.titre.setTitle("Page Index");
   this.getAllVilles();
  }
 getAllVilles(){
    this.cinemaService.getVilles()
    .subscribe(data=>{
      this.villes=data;
     console.log(data);
      
    })
   
  }
  onGetCinema(v){
    this.cinemaService.getCinema(v)
    .subscribe(data=>{
      this.cinema=data;
     console.log(data);
      
  })
  }}
