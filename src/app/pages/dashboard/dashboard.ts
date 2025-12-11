import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [BaseChartDirective, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  public barChartData: ChartData<'bar'> = {
    labels: ['Highest', 'High', 'Medium', 'Low', 'Lowest', 'None'],

    // Define a single dataset for the counts
    datasets: [
      {
        data: [0, 45, 120, 35, 0], // Example: 45 High, 120 Medium, 35 Low items
        label: 'Item Count by Priority', // Descriptive label for the legend

        // Assign distinct colors based on priority level
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)', // Red for High
          'rgba(255, 205, 86, 0.8)', // Yellow/Orange for Medium
          'rgba(75, 192, 192, 0.8)', // Teal for Low
        ],
        // Optional: Set border colors
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 205, 86, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  public barChartType: ChartType = 'bar';
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // Customizing the scales (axes)
    scales: {
      x: {
        grid: {
          display: false, // No grid lines on the Priority axis
        },
      },
      y: {
        grid: {
          display: false, // No grid lines on the Priority axis
        },
        suggestedMax: 150,
        min: 0,
        ticks: {
          stepSize: 10, // Ensure the Y-axis steps are clean (e.g., 0, 10, 20...)
        },
      },
    },

    // Customizing the chart plugins
    plugins: {
      legend: {
        display: false, // Hiding the legend since we only have one dataset
      },
    },
  };

  // Doughnut
  public doughnutChartLabels: string[] = ['To Do', 'In Progress', 'Done'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [350, 450, 100] }],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent; active: object[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent; active: object[] }): void {
    console.log(event, active);
  }
  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: true, // Typically left as true for a nice circular shape
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          // Optional: Customizing the font of the legend labels
          font: {
            size: 10,
          },
        },
      },
    },
  };
}
