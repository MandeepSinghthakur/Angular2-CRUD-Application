import { Component, OnInit } from '@angular/core';


import{ StockService } from '../stock.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
   //variables
    stocks : string[];
    updateEnabled=false;
    selectedStock:any;


  ngOnInit() {
  	this.getAllStocks();
  }

  constructor(private stockService:StockService) { }

  getAllStocks(){
  	this.stockService.getStocksAPI()
  	.subscribe(
  			data => this.stocks = data,
  			error => console.log('Server error')
  		);
  }

  createStocks(newStockCode:string,newName:string){
  	this.stockService.createStock(newStockCode,newName).subscribe(
  		data =>{
  			this.getAllStocks();
  		}
  		);
  }

  updateStocks(updatedStockCode:string,updatedStockName:string){
  	this.stockService.updateStock(this.selectedStock.id,updatedStockCode,updatedStockName).subscribe(
  		data =>{
  			this.getAllStocks();
  		}

  		);
   this.updateEnabled=false;
  }
 
  deleteStock(stockid:string){
  	this.stockService.deleteStock(stockid).subscribe(
  		data =>{
  			this.getAllStocks();
  		}
  		);
  } 
  loadDetails(stock:any){
  	this.updateEnabled=true;
  	this.selectedStock=stock;
  }
}
