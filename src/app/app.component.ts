import { Component, OnInit } from '@angular/core';
import { SelectItem } from './select/selectItem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent implements OnInit {
  title = 'frogedTest';

  data:SelectItem[] = [];

  selectedOpt:SelectItem = {available:false,value:0,label:''};

  setSelectedOption(selection: SelectItem):void {
    this.selectedOpt = selection
  }

  addValueToData():void {
    this.data = [...this.data, {available:true,value:this.data[this.data.length - 1].value + 1,label:`Opción ${this.data[this.data.length - 1].value + 1}`}]
  }

  constructor() {}

  ngOnInit(): void {
    // "llamada a la api"
    this.data = [
      {available:false,value:1,label:'Opción 1'},
      {available:true,value:2,label:'Opción 2'},
      {available:true,value:3,label:'Opción 3'},
      {available:false,value:4,label:'Opción 4'}
    ]
    
  }
}
