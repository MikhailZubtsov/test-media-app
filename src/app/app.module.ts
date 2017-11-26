import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {DndModule} from 'ng2-dnd';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { Block } from './models/target-list.model';
import { BLOCKS } from './list-files';
import { FileService } from './file.service';
import { ViewerComponent } from './viewer/viewer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ViewerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DndModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: EditorComponent},
      { path: 'viewer', component: ViewerComponent },
    ])
  ],
  exports: [BrowserModule, DndModule],
  providers: [ FileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
