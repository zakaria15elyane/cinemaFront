
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

 public villes;public cinemas;public salles:any;
 public currentVille;public currentCinema;
 

  constructor(public cinemaService:CinemaService, private titre: Title ) { }
  
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
  onGetCinemas(v){
    this.currentVille=v;
    this.cinemaService.getCinema(v)
    .subscribe(data=>{
      this.cinemas=data;
     console.log(data);
      
  })
  }
  onGetSalle(c){
    this.currentCinema=c;
    this.cinemaService.getSalles(c)
    .subscribe(data=>{
      this.salles=data;
      this.salles._embedded.salles.forEach(salle=>{
        this.cinemaService.getProjections(salle)
        .subscribe(data=>{
         salle.projections=data;
         console.log(data);
     
      })
    
    })  
  })

}
}
  
