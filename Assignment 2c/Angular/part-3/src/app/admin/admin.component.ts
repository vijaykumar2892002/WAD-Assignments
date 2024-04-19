import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  formData: any; // Object to store form data

  constructor(private formDataService: FormDataService) { }

  ngOnInit(): void {
    // Retrieve form data from service
    this.formData = this.formDataService.formData;
  }
}
