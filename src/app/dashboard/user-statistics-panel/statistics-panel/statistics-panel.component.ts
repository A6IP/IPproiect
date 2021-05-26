import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-panel',
  templateUrl: './statistics-panel.component.html',
  styleUrls: ['./statistics-panel.component.css']
})
export class StatisticsPanelComponent {
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
