import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-angular-java';

  constructor(private router:Router){}

  ShowMovies(){
    this.router.navigate(['/']);
  }

  NewMovie(){
    this.router.navigate(['add']);
  }
}
