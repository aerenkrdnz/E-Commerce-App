import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
@Input() heads: string[] = [];
}