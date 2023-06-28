import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  okrForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.okrForm = this.fb.group({
      okrtitle: '',
      objective:'',
      keyresults: this.fb.array([])
    });
  }

  get keyresults() : FormArray {
    return this.okrForm.get("keyresults") as FormArray
  }

  newkeyresult(): FormGroup {
    return this.fb.group({
      kresult: '',
      
    })
  }

  addkr() {
    this.keyresults.push(this.newkeyresult());
  }

  removekr(i:number) {
    this.keyresults.removeAt(i);
  }

  onSubmit() {
    console.log(this.okrForm.value);
  }
}
