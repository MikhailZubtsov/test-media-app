import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {DndModule} from 'ng2-dnd';
import { Router, ActivatedRoute } from '@angular/router';

import { EditorComponent } from './editor/editor.component';
import { Block } from './models/target-list.model';
import { BLOCKS } from './list-files';
import { FileService} from './file.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  

  constructor(
  ) { }

  ngOnInit() {
  }

}
  