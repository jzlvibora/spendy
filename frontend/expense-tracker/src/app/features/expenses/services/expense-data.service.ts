import { Injectable, Injector } from '@angular/core';
import { BaseHttpService } from '../../../core/services/base-http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseDataService extends BaseHttpService {

  constructor(protected override injector:Injector) {
    super(injector);
  }

  getAllExpenses():Observable<Expense[]>{
    return super.get("expense/all");
  }

  createExpense(requestBody:Expense):Observable<Expense>{
    return super.post("expense",requestBody);
  }

  updateExpense(requestBody:Expense):Observable<Expense>{
    return super.put("/expense");
  }

  deleteExpense(id:number):Observable<Expense>{
    return super.delete("/expense")
  }
}
