import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  

@Component({
  standalone: true,
  imports: [FormsModule, HttpClientModule], 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.formData).subscribe(
      (response: any) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/tasks']);
      },
      (error) => {
        alert('Invalid');
      }
    );
  }
}
