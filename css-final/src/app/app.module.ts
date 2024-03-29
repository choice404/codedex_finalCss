import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './components/core/text/text.component';
import { ImageComponent } from './components/core/image/image.component';
import { ProjectTreeComponent } from './components/project-comps/project-tree/project-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    ImageComponent,
    ProjectTreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
