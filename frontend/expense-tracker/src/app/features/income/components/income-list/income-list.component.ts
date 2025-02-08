import { Component, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, ActivatedRoute } from '@angular/router';
import { tap, map } from 'rxjs';
import { Income } from '../../models/income';
import { IncomeDataService } from '../../services/income-data.service';

@Component({
  selector: 'app-income-list',
  standalone: true,
  imports: [],
  templateUrl: './income-list.component.html',
  styleUrl: './income-list.component.scss'
})
export class IncomeListComponent {
    public incomes!: Income[];
  
    constructor(
      private incomeService: IncomeDataService,
      private destroyRef: DestroyRef,
      private router:Router,
      private route:ActivatedRoute
    ) {}
  
    ngOnInit(): void {
      this.incomeService
        .getAllIncome()
        .pipe(
          tap((x)=>console.log('income', x)),
          map((response: Income[]) => this.incomes = response),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe();
    }
  
    navigateToNewIncome(){
      this.router.navigate(['new'],{relativeTo:this.route})
  
    }

}
