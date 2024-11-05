import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string = '';
  currentOperation: string = '';
  firstOperand: number | null = null;
  secondOperand: number | null = null;

  numbers: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
  operations: string[] = ['+', '-', '*', '/'];

  appendNumber(num: string): void {
    this.display += num;
  }

  chooseOperation(operation: string): void {
    if (this.display === '') return;

    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.display);
      this.currentOperation = operation;
      this.display = '';
    }
  }

  clear(): void {
    this.display = '';
    this.firstOperand = null;
    this.secondOperand = null;
    this.currentOperation = '';
  }

  calculate(): void {
    if (this.firstOperand === null || this.display === '') return;

    this.secondOperand = parseFloat(this.display);

    switch (this.currentOperation) {
      case '+':
        this.display = (this.firstOperand + this.secondOperand).toString();
        break;
      case '-':
        this.display = (this.firstOperand - this.secondOperand).toString();
        break;
      case '*':
        this.display = (this.firstOperand * this.secondOperand).toString();
        break;
      case '/':
        this.display = (this.secondOperand === 0 ? 'Error' : (this.firstOperand / this.secondOperand).toString());
        break;
    }

    this.firstOperand = null;
    this.secondOperand = null;
    this.currentOperation = '';
  }
}


