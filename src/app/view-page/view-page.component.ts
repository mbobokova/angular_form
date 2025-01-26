import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { RouterLink  } from '@angular/router';


@Component({
  selector: 'app-view-page',
  standalone: true,
  imports: [NgIf, RouterLink ],
  templateUrl: './view-page.component.html',
  styleUrl: './view-page.component.css'
})
export class ViewPageComponent {
  formData: any;

  ngOnInit() {
    const data = localStorage.getItem('formData');
    if (data) {
      this.formData = JSON.parse(data)
    }
  }

}
