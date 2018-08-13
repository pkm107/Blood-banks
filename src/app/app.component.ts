import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { StateServiceService } from './state-service.service';
import { State } from './state.model';
import { BloodBankService } from './blood-bank.service';
import { BloodBankModel } from './bloodbankmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked{
  @ViewChild('scr') private scElement : ElementRef;
  constructor(private statesvc:StateServiceService,
  private bbSvc : BloodBankService){}
  title = 'MyProj';
  States:State[];
  recNo : number = 10000000;
  states :string[];
  cities:string[];
  bloodbank : BloodBankModel[];
  bbs : BloodBankModel[];

  scrollH:number = 0;
  state:string;
  city:string;
  reccount : number = 3;
  isMore : boolean = false;

  isState : boolean = false;

  ngOnInit(){
    // this.statesvc.GetAllState().subscribe((d)=>{
    //   this.States = d;
    // })    
    setInterval(this.LoadBB(),3000); 
    
    //this.states = this.bbSvc.GetStates(this.bloodbank);
    //this.cities = this.bbSvc.GetCities(this.bloodbank);
  }

  ngAfterViewChecked(){   
    if(this.bbs != undefined)
    {
      this.isMore = this.bbs.length > 3;
    }    
  }

  LoadBB(){
    this.bbSvc.LoadBloodBank(this.recNo).subscribe((d)=>{
      this.bloodbank = d.records;
      this.bbs = this.bloodbank.slice();
      this.isMore = this.bbs.length > 5;
      this.LoadDD();      
    })
  }

  LoadDD(){
    if(this.bloodbank){
      this.states = this.bbSvc.GetStates(this.bloodbank);      
    }  
  }

  onChangeState(e:Event){
    let er  = <HTMLSelectElement>e.currentTarget
    let s = er.value;
    this.state = s;
    this.cities = this.bbSvc.GetCities(this.bloodbank,s);
  }
  onChangeCity(e:Event){
    let er  = <HTMLSelectElement>e.currentTarget
    let s = er.value;
    this.city = s;
  }
  onSubmit(state : string,city:string){
    let res = this.bbSvc.GetBloodBanks(this.bloodbank,state,city);
    this.bbs = res.slice();
    //console.log(res);    
  }
  onChangePin(e:Event){   
    let current : HTMLInputElement = <HTMLInputElement>e.currentTarget;   
    this.bbs = this.bloodbank.filter(item => item._pincode.indexOf(current.value) !== -1);    
  }
  onLoadMore(){    
    this.reccount = this.reccount + 1;
    let ele : HTMLDivElement = this.scElement.nativeElement;
    this.scrollH = ele.scrollHeight;
    console.log('reccount : '+this.reccount)
    console.log('records : '+this.bbs.length % 3)
    if(this.reccount >= this.bbs.length){
      this.scrollH = 0;
      this.reccount = 3;
    } 
    else{
      this.scrollH = ele.scrollHeight;
    }         
  }
  onCheck(n:number){
    this.reccount = 3;
    if(n == 2){
      this.isState = true;
    }
    else{
      this.isState = false;
    }
  }  
  convertToNumber(s:string){
    return parseFloat(s);
  }
}
