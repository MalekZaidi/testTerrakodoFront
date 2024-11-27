import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; 
import { Router, provideRouter } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule, 
  ],
  providers: [
    AuthService, // Ensure AuthService is provided here
  ],
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
