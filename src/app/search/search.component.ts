import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
form!: FormGroup
  constructor( private fb: FormBuilder, private router : Router, private actroute: ActivatedRoute){}
  ngOnInit(): void {
    this.form = this.fb.group({
      locName : ['']
    })
  }

onSubmit(){

  const locName = this.form.value.locName;
  this.router.navigate(['/home'], { state: { lname: locName } });
  console.log(locName);
}

}
