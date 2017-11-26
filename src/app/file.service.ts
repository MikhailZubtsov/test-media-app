import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Block } from './models/target-list.model';
import { BLOCKS } from './list-files';

@Injectable()

export class FileService {

    
    getFiles(): Observable<Block[]>{
        return of(BLOCKS);
    }

    add(block: Block){
        BLOCKS.push(block);
    }

    setFiles(ind: number, name: string, url: string, file: File){
        BLOCKS[ind].name = name;
        BLOCKS[ind].url = url;
        BLOCKS[ind].file = file;
    }

    deleteFile(ind: number){
        BLOCKS.splice(ind,1);
    }

}


