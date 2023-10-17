import { Injectable } from '@angular/core';
import { SelectItem, userType } from '../interfaces/selectItem';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  data: SelectItem[] = [
    {available:false,value:1,label:'Paco Barba'},
    {available:true,value:2,label:'Javier Marín'},
    {available:true,value:3,label:'Lucía Aroca'},
    {available:false,value:5,label:'Daniel Hidalgo'},
    {available:true,value:6,label:'Jaime Hidalgo'},
    {available:true,value:7,label:'Manuel Martín'},
    {available:false,value:8,label:'Emilio Sosa'},
    {available:true,value:9,label:'Ibai Berengela'},
    {available:false,value:10,label:'Javier García'},
    {available:false,value:11,label:'Carlos Alcantara'},
    {available:false,value:12,label:'Antonio García'},
    {available:true,value:13,label:'Ester Soria'},
    {available:false,value:14,label:'Albaro de los Montero'},
    {available:false,value:15,label:'Dolores Engracia'},
    {available:false,value:16,label:'Sr Sotomonte'},
    {available:true,value:17,label:'El mago gris'},
    {available:false,value:18,label:'Trancos'},
    {available:true,value:19,label:'Enano'},
    {available:true,value:20,label:'Orejas Picudas'},
    {available:true,value:21,label:''}
  ]

  constructor() {}

  getUsers(option: userType):SelectItem[] {
    switch (option) {
      case 0:
        return this.data.filter((_, index) => index % 2 === 0)
      case 1:
        return this.data.filter((_, index) => index % 2 !== 0)
      case 2:
          return this.data.filter((item) => item.label.toLocaleLowerCase().includes('jaime'))
      default:
        return this.data
    }
    
  }
}
