import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {DndModule} from 'ng2-dnd';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { Block } from '../models/target-list.model';
import { BLOCKS } from '../list-files';
import { FileService} from '../file.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  blocks: Block[];

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.getFiles();
  }

  getFiles(): void {
    this.fileService.getFiles()
        .subscribe(blocks => this.blocks = blocks);
  }

}
