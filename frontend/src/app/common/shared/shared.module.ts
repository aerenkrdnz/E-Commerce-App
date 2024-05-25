import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BlankComponent } from "../components/blank/blank.component";
import { TableComponent } from "../components/table/table.component";
import { ValidDirective } from "../directives/valid.directive";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ValidDirective,
    BlankComponent,
    TableComponent
  ],
  exports:[
    CommonModule,
    FormsModule,
    RouterModule,
    ValidDirective,
    BlankComponent,
    TableComponent,
  ]
})
export class SharedModule { }
