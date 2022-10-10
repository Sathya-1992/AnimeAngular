import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentWorkComponent } from './components/content-work/content-work.component';
import { AnimeDirective } from './anime.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentWorkComponent,
    AnimeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
