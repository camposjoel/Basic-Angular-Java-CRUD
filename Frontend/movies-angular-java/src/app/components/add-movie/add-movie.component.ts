import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie: Movie;
  titulo_pagina: String; 

  constructor(
    private router: Router,
    private _MoviesService: MoviesService
  ) {
    this.movie = new Movie(null, "", "", null);
    this.titulo_pagina = "Agregar Película";
  }

  ngOnInit() {
  }

  Guardar() {
    this._MoviesService.saveMovie(this.movie).subscribe(
      response => {
          this.router.navigate(['/']);
      });
  }

}
