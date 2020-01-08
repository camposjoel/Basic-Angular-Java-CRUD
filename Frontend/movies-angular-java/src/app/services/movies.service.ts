import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/ApiMovies/peliculas';

  getMovies():Observable<any>{
    return this.http.get<Movie[]>(this.Url);
  }

  getMovie(movieId):Observable<any>{
    return this.http.get<Movie>(this.Url+"/"+movieId);
  }

  saveMovie(movie):Observable<any>{
    return this.http.post(this.Url, movie);
  }

  updateMovie(movie):Observable<any>{
    return this.http.put(this.Url+"/"+movie.id, movie);
  }

  deleteMovie(movieId):Observable<any>{
    return this.http.delete(this.Url+"/"+ movieId);
  }
}
