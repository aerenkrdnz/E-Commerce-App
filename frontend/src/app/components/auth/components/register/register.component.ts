import { Component } from '@angular/core';
import { SharedModule } from '../../../../common/shared/shared.module';
import { NgForm } from '@angular/forms';
import { RegisterModel } from '../../models/register.model';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model: RegisterModel= new RegisterModel();

constructor(
  private _auth: AuthService,
  private _toastr: ToastrService,
  private _router: Router
){}

  register(form:NgForm){
    if(form.valid){
      this._auth.register(this.model,res=>{
        localStorage.setItem("token",res.token);
        localStorage.setItem("user",JSON.stringify(res.user));
        this._toastr.success("Kullanıcı Kaydı Başarıyla Tamamlandı")
        this._router.navigateByUrl("/");
      });
    }
  }
}
