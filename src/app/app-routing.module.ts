import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstatscomponentComponent } from './components/allstatscomponent/allstatscomponent.component';
import { CallbackComponent } from './components/callback/callback.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'callback', component : CallbackComponent},
  {path : 'stats/:type/:range', component : AllstatscomponentComponent,pathMatch: 'full'}
];
// path, component
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
