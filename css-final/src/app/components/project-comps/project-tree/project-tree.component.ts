import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Directory } from '../../../interfaces/directory';

@Component({
  selector: 'app-project-tree',
  templateUrl: './project-tree.component.html',
  styleUrls: ['./project-tree.component.scss']
})
export class ProjectTreeComponent {
    @Input() directory: Directory = {} as Directory;
    @Input() last: boolean = true;
    @Input() indent: string = "";
    @Output() specialEvent = new EventEmitter<string>();

    newIndent: string = "";

    ngOnInit(): void
    {
        if(this.last)
        {
            this.newIndent = this.indent + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        else
        {
            this.newIndent = this.indent + "│&nbsp;&nbsp;&nbsp;";
        }
    }

    toggleCollapse(): void
    {
        this.directory.collapsed = !this.directory.collapsed;
    }

    special(data: string): void
    {
        console.log(data);
        this.specialEvent.emit(data);
    }
}
