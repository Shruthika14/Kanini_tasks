import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  popup(){
    alert("Submitted Successfully!");
  }
  // private init() : void
  // {
  //   this.AddStForm = this.formBuilder.group({
  //     studId:[],
  //     name:[],
  //     city:[],
  //     pin:[]
  //   });
  // }

}
