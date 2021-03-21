import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IdComponent } from './components/static/id/id.component';
import { CallbackComponent } from './components/callback/callback.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainTextComponent } from './components/mini/main-text/main-text.component';
import { InfiniteLoadBarComponent } from './components/mini/infinite-load-bar/infinite-load-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdComponent,
    CallbackComponent,
    MainTextComponent,
    InfiniteLoadBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
