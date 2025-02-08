import { Component } from '@angular/core';

import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [CustomButtonComponent,CommonModule],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss'
})
export class Comp2Component {
  buttonLabel="Hello from Comp2";
  buttonColor="red";

  handleClick(){
    alert("Button is clicked");
  }
}
