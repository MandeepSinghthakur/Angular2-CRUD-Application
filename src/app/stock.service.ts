import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http'
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class StockService{

	constructor(private http:Http){

	}

	getStocksAPI():Observable<any>{
		return this.http.get("http:/"+"/localhost:3000/stocks")
			    .map((resp:Response) => resp.json())
				.catch((error:any)=> Observable.throw(error.json().error || 'server error'));
	}

	createStock(newStockCode:string,newName:string):Observable<any>{
	    return this.http.post("http:/"+"/localhost:3000/stocks",{Name:newName,stockCode:newStockCode});

	  }

	updateStock(stockId:string,updatedStockCode:string,updatedStockName:string):Observable<any>{
		return this.http.put("http:/"+"/localhost:3000/stocks/"+ stockId,{Name:updatedStockName,stockCode:updatedStockCode});
	}

	deleteStock(stockId:string):Observable<any>{
		return this.http.delete("http:/"+"/localhost:3000/stocks/"+ stockId);
	}

	getStocks():string[]
	{
		return ['AAPL', 'IBM', 'GOOG'];
	}
}