import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent {

  private closeClick$ : Observable<any>= new Subject();

  private user$ : Observable<any>;
  
  constructor(private appService : AppService) {
    this.user$ = 
      this.appService.createSuggestionStream(this.closeClick$);

  }

}