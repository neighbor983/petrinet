import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ObserverType } from '../models/observerType.model';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  placeForm: FormGroup;
  observerTypeList: ObserverType[] = [ObserverType.attacker, ObserverType.defender];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.placeForm = this.fb.group({
      name:'',
      inhibitorArc: false,
      observable: false,
      observerType:''
    });
    
    this.placeForm.valueChanges.subscribe(console.log);
  }
  

  

}
