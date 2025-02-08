import { Component, DestroyRef, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { ExpenseDataService } from '../../services/expense-data.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryDataService } from '../../services/category-data.service';
import { map, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Expense } from '../../models/expense';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss',
})
export class AddExpenseComponent implements OnInit {
  public categories: Category[] = [];
  public form!: FormGroup;
  public expense!: Expense;

  constructor(
    private categoryService: CategoryDataService,
    private expenseService:ExpenseDataService,
    private fb: FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private readonly destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.fetchCategories();
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

  private fetchCategories(): void {
    this.categoryService
      .getAllCategory()
      .pipe(
        map((response: Category[]) => (this.categories = response)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  onSubmit():void{
    this.createExpense();

  }

  private createExpense(){
    const body:Expense = this.form.value
    console.log(this.form.value)
    this.expenseService.createExpense(body).pipe(map((expense:Expense)=>this.expense = expense),take(1)).subscribe()
  }

  routeBack(){
    this.router.navigate(['expenses']);

  }
}
