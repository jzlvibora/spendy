import { Component, DestroyRef, OnInit } from '@angular/core';
import { Income } from '../../models/income';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';
import { IncomeDataService } from '../../services/income-data.service';

@Component({
  selector: 'app-add-income',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-income.component.html',
  styleUrl: './add-income.component.scss'
})
export class AddIncomeComponent implements OnInit {
    public form!: FormGroup;
    public income!: Income;
  
    constructor(
      private incomeService: IncomeDataService,
      private fb: FormBuilder,
      private router:Router,
      private route:ActivatedRoute,
      private readonly destroyRef: DestroyRef
    ) {}
  
    ngOnInit(): void {
      this.initForm();
    }
  
    private initForm(): void {
      this.form = this.fb.group({
        title: [''],
        description: [''],
        category: [''],
        date: [''],
        amount: [null],
      });
    }
  
    onSubmit():void{
      this.createIncome();
  
    }
  
    private createIncome(){
      const body:Income = this.form.value
      console.log(this.form.value)
      this.incomeService.createIncome(body).pipe(map((income:Income)=>this.income = income),take(1)).subscribe()
    }
  
    routeBack(){
      this.router.navigate(['income']);
  
    }

}
