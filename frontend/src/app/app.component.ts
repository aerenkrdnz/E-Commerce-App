import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',    
  template: `
  <router-outlet></router-outlet>
  <ngx-spinner bdColor = "rgba(0, 0, 0, 0.8)" size = "medium" color = "#d16a6a" type = "ball-climbing-dot" [fullScreen] = "true"><p style="color: white" > Lütfen Bekleyiniz... </p></ngx-spinner>
  `,
  standalone: true,
  imports:[RouterModule,NgxSpinnerModule]
})
export class AppComponent {
  
}
