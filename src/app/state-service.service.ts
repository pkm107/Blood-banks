import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from './state.model';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  constructor(private client:Http) { }
  url : string = 'http://api.nightlights.io/months/1993.3-1993.4/states';

  GetAllState():Observable<State[]>
  {
    return this.client.get(this.url).pipe(map(
      (data)=>{
        let d : State[] =  data.json();
        return d;
      }
    ))
  }
}
