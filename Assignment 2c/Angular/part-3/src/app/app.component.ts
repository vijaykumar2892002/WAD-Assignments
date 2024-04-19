import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from './form-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Add this line to mark the component as standalone
})
export class AppComponent {
  title = 'Register';

  constructor(private router: Router, private formDataService: FormDataService) {}

  register(name: string, address: string, contact: string, email: string, password: string) {
    // Store form data in service
    this.formDataService.formData = { name, address, contact, email, password };
    
    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
