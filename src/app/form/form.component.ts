import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb:FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', ],
      email: ['', [Validators.required, Validators.email] ],
      telNumber: ['', [Validators.required, Validators.minLength(9)]]
    })
  }

  ngOnInit() {
    // Naèítanie dát z localStorage pri inicializácii
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.form.patchValue(JSON.parse(savedData));
    }

    // Aktualizácia localStorage pri zmene hodnoty formulára
    this.form.valueChanges.subscribe(value => {
      localStorage.setItem('formData', JSON.stringify(value));
    });
  }

  send() {
    if (this.form.valid) {
      localStorage.setItem(
        'formData', JSON.stringify(this.form.value)
      );
      this.router.navigate(['/view']);      
    }
  }
}
