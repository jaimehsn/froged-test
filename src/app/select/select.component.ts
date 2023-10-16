import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { SelectItem } from './selectItem';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, OnChanges {

  @Input() options: SelectItem[] = [];
  @Output() selectedOption = new EventEmitter<SelectItem>();

  listToggle:boolean = false;

  selectedOptionLocal:SelectItem = {available:false,value:0,label:''}

  emitSelectedOption(option: SelectItem): void {
    this.selectedOption.emit(option)
    this.selectedOptionLocal = option
  }

  onFocusOut(): void  {
    console.log('focuse out')
  }

  changeListToggle(state: boolean):void {
    this.listToggle = state
  }

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['options']){
      console.log(changes['options'].currentValue)
    }
  }

}
