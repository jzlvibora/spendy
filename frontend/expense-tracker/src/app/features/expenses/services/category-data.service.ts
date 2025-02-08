import { Injectable, Injector } from '@angular/core';
import { BaseHttpService } from '../../../core/services/base-http.service';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService extends BaseHttpService{
   constructor(protected override injector:Injector) {
      super(injector);
    }
  
    getAllCategory():Observable<Category[]>{
      return super.get("category/all");
    }
  
    createCategory(requestBody:Category):Observable<Category>{
      return super.post("category",requestBody);
    }
  
    updateCategory(requestBody:Category,params:Params):Observable<Category>{
      return super.put("category",requestBody,params);
    }
  
    deleteCategory(params:Params):Observable<Category>{
      return super.delete("category",params)
    }

}
