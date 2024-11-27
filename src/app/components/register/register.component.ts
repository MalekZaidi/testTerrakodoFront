import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({standalone: true,  // This makes the component standalone
  imports: [FormsModule], // Import HttpClientModule along with other modules
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formData = { name: '', email: '', password: '', password_confirmation: '' };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.formData).subscribe(
      () => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Registration failed');
      }
    );
  }
}
