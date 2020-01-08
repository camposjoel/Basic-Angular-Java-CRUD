import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  movies: Movie[];
  constructor(private _moviesService:MoviesService, private router:Router) { }

  ngOnInit() {
    this._moviesService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  Eliminar(movieId){
    this._moviesService.deleteMovie(movieId).subscribe( resp => {
      this.ngOnInit();
    });
  }
}
