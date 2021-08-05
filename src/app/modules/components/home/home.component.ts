import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = [
    {
      total: "Rp. 52.000.000,00",
      note: "Keterangan 1",
      icon: "fas fa-hand-holding-usd",
      color: "#E94696"
    },
    {
      total: "Rp. 4.300.000,00",
      note: "Keterangan 2",
      icon: "far fa-edit",
      color: "#FFABE1"
    },
    {
      total: "Rp. 12.000.000,00",
      note: "Keterangan 3",
      icon: "fas fa-motorcycle",
      color: "#F1CA89"
    },
    {
      total: "Rp. 12.00.000,00",
      note: "Keterangan 4",
      icon: "fas fa-house-user",
      color: "#F4BF6C"
    },
    {
      total: "Rp. 12.00.000,00",
      note: "Keterangan 5",
      icon: "fas fa-hourglass-half",
      color: "#B5EAEA"
    },
    {
      total: "Rp. 12.00.000,00",
      note: "Keterangan 6",
      icon: "fas fa-hamburger",
      color: "#08D597"
    },
  ]

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType = 'line' as ChartType;
  barChartLegend = true;
  barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
