import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SelectItem, userType } from './interfaces/selectItem';
import { UsersService } from './services/users.service'
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent implements OnInit {
  form:FormGroup = this.fb.group({
    usersSelector: new FormControl({value:{available:true,value:0,label:``}, disabled: false}, [customValidator()])
  })
  
  title = 'frogedTest';

  data:SelectItem[] = [];

  selectedOpt:SelectItem = {available:false,value:0,label:''};

  displayDataOption:userType = userType.frontEnd;

  chageDataList(option: number) {
    switch (option) {
      case 0:
        this.data = this.UsersService.getUsers(userType.frontEnd)
        break;
      case 1:
        this.data = this.UsersService.getUsers(userType.backEnd)
        break;
      case 2:
        this.data = this.UsersService.getUsers(userType.fullStack)
        break;
      default:
    }
    
  }

  setSelectedOption(selection: SelectItem):void {
    this.selectedOpt = selection
  }

  addValueToData():void {
    this.data = [...this.data, {available:true,value:this.data[this.data.length - 1].value + 1,label:`Aded ${this.data[this.data.length - 1].value + 1}`}]
  }

  onSubmit(){
    console.log(this.form.value)
  }

  get usersSelector() {
    return this.form.get('usersSelector')
  }

 
  constructor(private UsersService: UsersService, private fb: FormBuilder) {}


  ngOnInit(): void {
    // "llamada a la api"
    this.data = this.UsersService.getUsers(userType.frontEnd);
    
  }
}

function customValidator(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {

      const value = control.value.label;
      const regEx = /jaime/i

      if (!value) {
          return null;
      }

      const isEmpty = regEx.test(value)

      return !isEmpty ? {incomplete:true}: null;
  }
}