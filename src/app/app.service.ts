import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AppService {

  constructor( private http : HttpClient) {}

  //stream from click on the refresh button event
  private refreshClick$ : Observable<any> = new Subject();
  
  private request$ : Observable<string> = 
   this.refreshClick$
   .startWith('startup click')
   /*.map( () => Math.floor(Math.random()*500))
   .map( randomOffset => `https://api.github.com/users?since=${randomOffset}`);*/
   .map( () => `https://jsonblob.com/api/7343e6c8-ebbf-11e7-af5e-271968d76839`);

  private response$ : Observable<any> =
  this.request$
  .flatMap( url => this.http.get(url))
  .share();

  public createSuggestionStream(closeClick$) {
    return closeClick$.map(() => null)
    .merge(
    closeClick$.startWith('startup click')
        .combineLatest(this.response$,             
            (click, listUsers) =>
            listUsers[Math.floor(Math.random()*listUsers.length)])
        .delay(400)
        .merge(
            this.refreshClick$.map( () => null))
        .startWith(null));
}
  




}