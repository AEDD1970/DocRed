import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(public authService: AuthService, public router: Router ) { }

  ngOnInit() {
  }

  onSubmitUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        console.log('Congratulations!!!');
        console.log(res);
        this.router.navigate(['private-page']);
      })
      .catch((err) => {
        console.log(err)
      });
  }

}
