import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { StateServiceService } from './state-service.service';
import { BloodBankService } from './blood-bank.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyAkFkEnLd3yQeBsghD62DEZfxAaSCeMeQo'})
  ],
  providers: [StateServiceService,BloodBankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
