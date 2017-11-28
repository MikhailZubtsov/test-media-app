import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {DndModule} from 'ng2-dnd';
import { Block } from '../models/target-list.model';
import { BLOCKS } from '../list-files';
import { FileService} from '../file.service';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
  })
  
  export class EditorComponent implements OnInit {
    blocks: Block[];
    private filename: string = "";
  
    constructor(private fileService: FileService){
  
    }
    ngOnInit() {
      this.getFiles();
    }
  
    getFiles(): void {
      this.fileService.getFiles()
          .subscribe(blocks => this.blocks = blocks);
    }
    
  
    addToImage() {
        var ind = this.blocks[this.blocks.length - 1].id + 1;
        this.fileService.add({ id: ind, name: "", url: "", type: "Изображение"});
      }

    addToVideo() {
      var ind = this.blocks[this.blocks.length - 1].id + 1;
      this.fileService.add({ id: ind, name: "", url: "", type: "Видео"});
    }

    addToAudio() {
      var ind = this.blocks[this.blocks.length - 1].id + 1;
      this.fileService.add({ id: ind, name: "", url: "", type: "Аудио"});
    }
  
    fileChange(event) {   
        var active = parseInt(document.activeElement.id);
        let file = event.target.files[0];
        var reader = new FileReader();
        
        reader.onloadend = (e) =>{
          this.blocks[active].url = reader.result;
        }
      
        if(file){
          this.fileService.setFiles(active, file.name, this.blocks[active].url, file);
          reader.readAsDataURL(this.blocks[active].file);
        }
    }  

    deleteBlock(){

      if(this.blocks.length > 1){
      var active = parseInt(document.activeElement.id);
      this.fileService.deleteFile(active);
      }
    }

    
      
  }
    
  