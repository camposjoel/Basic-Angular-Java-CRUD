import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: '../add-movie/add-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movie:Movie;
  titulo_pagina:String;

  constructor(
    private _moviesService:MoviesService,
    private _router:Router,
    private _route:ActivatedRoute
  ) 
    { 
      this.movie = new Movie(null,"","",null);
      this.titulo_pagina = "Editar Película";
    }

  ngOnInit() {
    this.getMovie();
  }

  Guardar(){
    
    this._moviesService.updateMovie(this.movie).subscribe(
      response => {
        
        this._router.navigate(['/']);
      }
    );
  }

  getMovie(){
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._moviesService.getMovie(id).subscribe(
        response => {
          //console.log(response);
          //this.movie = response;
          if(response){
            this.movie = response;
          }
          else{
            this._router.navigate(['/']);
          }
        }
      );
    });
  }

}
