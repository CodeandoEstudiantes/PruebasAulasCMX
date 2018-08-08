import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpcliente: HttpClient) {

console.log("console funcionando")
   }
   getData(){


   }

}
