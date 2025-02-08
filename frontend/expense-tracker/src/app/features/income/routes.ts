import { Routes } from "@angular/router";
import { AddIncomeComponent } from "./components/add-income/add-income.component";
import { IncomeListComponent } from "./components/income-list/income-list.component";


export const INCOME_ROUTES: Routes = [
  { path: '', component: IncomeListComponent },
  { path: 'new', component: AddIncomeComponent},
];