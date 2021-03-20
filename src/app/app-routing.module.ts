import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './components/callback/callback.component';
import { HomeComponent } from './components/home/home.component';
import { StatsComponent } from './components/stats/stats.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'callback', component : CallbackComponent},
  {path : 'stats', component : StatsComponent}
];
// path, component
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
