import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks.component';
import { HighlightDirective } from './highlight.directive';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';

//services

import {StockService} from './stock.service';
import { DateFormatterPipe } from './date-formatter.pipe';
import {CurrencyService} from './currency.service';

//bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//routing
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BondsDirective } from './bonds.directive';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    HighlightDirective,
    MutualfundsComponent,
    DateFormatterPipe,
    DashboardComponent,
    BondsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [StockService,CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
