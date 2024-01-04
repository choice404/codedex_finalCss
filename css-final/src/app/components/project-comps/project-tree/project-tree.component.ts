import { Component, Input } from '@angular/core';
import { Directory } from '../../../interfaces/directory';

@Component({
  selector: 'app-project-tree',
  templateUrl: './project-tree.component.html',
  styleUrls: ['./project-tree.component.scss']
})
export class ProjectTreeComponent {
    @Input() depth: number = 0;
    @Input() recurse: number = 0;
    @Input() show: boolean = true;
    @Input() subDir: any = {};
    @Input() directory: Directory = {
        name: "",
        dirList: [],
        fileList: [],
        isFinal: false,
    }

    showChildren: boolean = true;
    isFinal: boolean = false;
    nestedIsFinal: boolean = false;
    counter: number[] = []
    counter2: number[] = []
    path: string = "├── "
    filePath: string = "├── "

    ngOnInit(): void
    {
        this.showChildren = this.show;
        this.counter = Array.from({ length: this.depth - 1 });
        this.counter2 = Array.from({ length: this.depth + 1 });
        this.isFinal = this.subDir.isFinal
        if(this.directory.isFinal)
        {
            this.nestedIsFinal = this.directory.isFinal
        }
        if(this.subDir.isFinal)
            this.path = "└── ";
        if(this.depth < 1)
            this.depth = 0;
    }

    onClick()
    {
        this.showChildren != this.showChildren;
    }
}
