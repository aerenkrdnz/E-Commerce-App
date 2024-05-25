import { Component } from '@angular/core';
import { SharedModule } from '../../../../common/shared/shared.module';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {

}
