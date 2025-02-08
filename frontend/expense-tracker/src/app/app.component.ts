import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ExpenseListComponent } from './features/expenses/components/expense-list/expense-list.component';
import { HttpClient } from '@angular/common/http';
import { ParentComponent } from './practice/parent/parent/parent.component';
import { ChildComponent } from './practice/child/child/child.component';
import { Comp2Component } from './practice/input-output/comp2/comp2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, ExpenseListComponent,ParentComponent,ChildComponent,Comp2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'expense-tracker';
}
