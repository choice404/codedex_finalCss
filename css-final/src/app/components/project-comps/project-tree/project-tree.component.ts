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

    name: string = "";
    newIndent: string = "";

    ngOnInit(): void
    {
        this.name = this.directory.name;
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

    onMouseEnter(): void
    {
        this.name = this.directory.name + " <";
    }

    onMouseLeave(): void
    {
        this.name = this.directory.name;
    }

}
