import { Component} from '@angular/core';

import {StockService} from './stock.service';

@Component({
	selector:'stocks',
	template:'<h2>Stocks List</h2><ul><li *ngFor="let stock of stocks">{{stock}}</li></ul><hr><ul *ngIf="showStockMarket"><li *ngFor="let stockMarket of stockMarkets">{{stockMarket}}</li></ul><hr>'+
              '<div [ngSwitch]="shownMarket">'+
		     '<div *ngSwitchCase="1">New York Stock Exchange</div>'+
		     '<div *ngSwitchCase="2">London Stock Exchange</div>'+
		     '<div *ngSwitchDefault>Default Template</div></div>'
})

export class StocksComponent{
	//stocks=['AAPL','IBM','UDEMY'];
   stocks;
   showStockMarket=true;
   shownMarket="1";
   stockMarkets=["NYSE","NASDAQ","EURONEXT","HKSE","LSE"];
  constructor(stockService: StockService){
  		this.stocks=stockService.getStocks();
  }
}