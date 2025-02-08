import { Component } from '@angular/core';
import { ChildComponent } from '../../child/child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  content:string='Hi'

  updateContent(){
    this.content = 'updated';
  }

}
