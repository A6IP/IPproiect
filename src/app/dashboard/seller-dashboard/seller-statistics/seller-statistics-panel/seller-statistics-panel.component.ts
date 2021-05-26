import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seller-statistics-panel',
  templateUrl: './seller-statistics-panel.component.html',
  styleUrls: ['./seller-statistics-panel.component.css']
})
export class SellerStatisticsPanelComponent {
  @Input() data: any[];
  @Input() xAxisLabel: string;
  @Input() yAxisLabel: string;

  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  autoScale = true;
  colorScheme = {
    domain: ['#3c5bff']
  };

}
