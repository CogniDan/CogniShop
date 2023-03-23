import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss']
})
export class QuantityInputComponent {

  myFormGroup = new FormGroup({
    formField: new FormControl()
  });

  @Input('value')
  _value: number = 0;
  _step: number = 1;
  _min: number = 0;
  @Input('max')
  _max: number = Infinity;
  _wrap: boolean = false;
  color: string = 'default';
  
  @Output() valueChange = new EventEmitter<number>();

  private parseNumber(num: any): number {
    return +num;
  }

  private parseBoolean(bool: any): boolean {
    return !!bool;
  }

  setColor(color: string): void {
    this.color = color;
  }

  getColor(): string {
    return this.color
  }

  incrementValue(step: number = 1): void {

    let inputValue = this._value + step;

    if (this._wrap) {
      inputValue = this.wrappedValue(inputValue);
    }

    this._value = inputValue;
    this.valueChange.emit(inputValue);
  }

  private wrappedValue(inputValue: number): number {
    if (inputValue > this._max) {
      return this._min + inputValue - this._max;
    }

    if (inputValue < this._min) {

      if (this._max === Infinity) {
        return 0;
      }

      return this._max + inputValue;
    }

    return inputValue;
  }

  shouldDisableDecrement(inputValue: number): boolean {
    return !this._wrap && inputValue <= this._min;
  }

  shouldDisableIncrement(inputValue: number): boolean {
    return !this._wrap && inputValue >= this._max;
  }
}
