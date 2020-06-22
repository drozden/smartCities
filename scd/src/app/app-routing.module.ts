import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';


const routes: Routes = [
  {path: '', redirectTo: 'bar-chart', pathMatch: 'full'},
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'line-chart', component: MyLineChartComponent}
  //{path: '**', component: MyBarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
