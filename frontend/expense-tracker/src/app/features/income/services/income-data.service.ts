import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../../../core/services/base-http.service';
import { Expense } from '../../expenses/models/expense';
import { Income } from '../models/income';

@Injectable({
  providedIn: 'root'
})
export class IncomeDataService extends BaseHttpService {

  constructor(protected override injector:Injector) {
    super(injector);
  }

  getAllIncome():Observable<Income[]>{
    return super.get("income/all");
  }

  createIncome(requestBody:Income):Observable<Income>{
    return super.post("income",requestBody);
  }

  updateIncome(requestBody:Income):Observable<Income>{
    return super.put("/income");
  }

  deleteIncome(id:number):Observable<Income>{
    return super.delete("/income")
  }
}
