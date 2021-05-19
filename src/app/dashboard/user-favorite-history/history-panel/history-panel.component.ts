import { Component, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IHistory} from './history';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-history-panel',
  templateUrl: './history-panel.component.html',
  styleUrls: ['./history-panel.component.css']
})
export class HistoryPanelComponent {

  private URL = 'https://house-prediction-fii.herokuapp.com/api/v1/users/history?userID=6757fff1-e437-4d23-bd45-646a4b419b16';
  histData: any[] = [];
  histIndex = 1;
  @ViewChild("item_1") block: HTMLElement;

  constructor(private http: HttpClient, public _sanitizer: DomSanitizer) {
    this.http.get<IHistory[]>(this.URL).subscribe(
      data => this.histData = data,
      () => {},
    );
  }

  test(): void {
    if (this.histData.length == 0) {
      this.block.style.visibility = 'hidden';
    }
  }

  histPrev(): void {
    if (this.histIndex - 1 !== 0) {
      this.histIndex = this.histIndex - 1;
    }
  }

  histNext(): void {
    if (this.histIndex + 1 !== this.histData.length - 1) {
      this.histIndex = this.histIndex + 1;
    }
  }


}
