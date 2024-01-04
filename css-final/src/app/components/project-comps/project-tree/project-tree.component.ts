import { Component, Input } from '@angular/core';
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

}
