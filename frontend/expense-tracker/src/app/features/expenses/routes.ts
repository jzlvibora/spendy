import { Routes } from "@angular/router";
import { AddCategoryComponent } from "./components/add-category/add-category.component";
import { AddExpenseComponent } from "./components/add-expense/add-expense.component";
import { CategoryListComponent } from "./components/category-list/category-list.component";
import { ExpenseListComponent } from "./components/expense-list/expense-list.component";

export const EXPENSES_ROUTES: Routes = [
  { path: '', component: ExpenseListComponent },
  { path: 'new', component: AddExpenseComponent},
  { path: 'categories', component:CategoryListComponent},
  { path: 'categories/new', component: AddCategoryComponent}
];