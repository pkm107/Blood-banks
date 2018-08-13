import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BloodBankModel, BBResponse } from './bloodbankmodel';
import { Observable,Operator } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  constructor(private http : Http) { }

  recCount : number = 10;
  bloodbank : BloodBankModel[];

  LoadBloodBank(recno:number){
    let url = 'https://api.data.gov.in/resource/fced6df9-a360-4e08-8ca0-f283fc74ce15?api-key=579b464db66ec23bdd000001682f22e74cb44b357d2577f199638ddc&format=json&offset=0&limit='+recno
    return this.http.get(url).pipe(map((res)=>{
            
    let d : BBResponse = res.json();
    return d;
    }))
  }

  GetStates(bBank:BloodBankModel[]){
    let states : string[] = [];    
    let unique : boolean = true;
    bBank.forEach((d,i)=>{       
      if(states.indexOf(d.__state) > -1)
      {unique = false;}
      else{unique = true;}           
      if(unique){states.push(d.__state);}
    });
    return states;
  }

  GetCities(bBank:BloodBankModel[],state:string){
    let cities : string[] = [];
    let unique : boolean = true;
    let bb:BloodBankModel[] = [];

    bBank.forEach((d,i)=>{
      if(d.__state.toLowerCase() == state.toLowerCase())
      {
        bb.push(d);
      }
    });
    bb.forEach((d,i)=>{
      if(cities.indexOf(d.__city) > -1)
      {unique = false;}
      else{unique = true;}           
      if(unique){cities.push(d.__city);}
    });
    return cities;
  }
  
  GetBloodBanks(bBank:BloodBankModel[],state:string,city:string){
    let bbs : BloodBankModel[] = [];
    if(state == '' || state == null){
      bbs = bBank.slice();
      return bbs;
    }
    else if(city == '' || city == null){
      bbs = [];
      bBank.forEach((d,i) => {
        if(d.__state.toLowerCase() == state.toLowerCase()){
          bbs.push(d);
        }            
      });
      return bbs;
    }
    else{
      bbs = [];
      bBank.forEach((d,i) => {
        if(d.__state.toLowerCase() == state.toLowerCase()
      && d.__city.toLowerCase() == city.toLowerCase()){
          bbs.push(d);
        }            
      });
      return bbs;
    }
  }
}
