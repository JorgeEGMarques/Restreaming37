import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() searchParam = new EventEmitter<string>();

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.searchParam.emit(value);
  }
}
