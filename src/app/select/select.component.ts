import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, Optional, Self } from '@angular/core';
import { SelectItem } from '../interfaces/selectItem';
import { ControlValueAccessor, Form, FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit, OnChanges, ControlValueAccessor {

  @Input() options: SelectItem[] = [];

  @Output() selectedOption = new EventEmitter<SelectItem>();

  listToggle:boolean = false;

  value:SelectItem = {available:false,value:0,label:''}

  disabled:boolean = false

  get errorState() {
    return this.errorMattcher.isErrorState(this.ngControl.control as FormControl, null);
  }

  onChange!: (value: SelectItem) => void

  onTouched!: () => void

  emitSelectedOption(option: SelectItem): void {
    this.selectedOption.emit(option)
    this.value = option
  }

  onFocusOut(): void  {
    console.log('focuse out')
  }

  changeListToggle(state: boolean):void {
    this.listToggle = state
  }

  constructor(@Optional() @Self() public ngControl: NgControl, private errorMattcher: ErrorStateMatcher) {
    if (this.ngControl != null){
      this.ngControl.valueAccessor = this;
    }
  }
  writeValue(obj: SelectItem): void {
    // throw new Error('Method not implemented.');
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    // throw new Error('Method not implemented.');
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
    this.disabled = isDisabled
  }

  ngOnInit(): void {
  }

  setValue(value: SelectItem) {

    if (this.disabled) {
      return;
    }
    this.value = value
    this.selectedOption.emit(value)
    this.onChange(this.value)
    this.onTouched()
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(changes['options']){
      
    }
  }

}
