import { Component, Input } from '@angular/core';
import { Directory2 } from '../../../interfaces/directory2';

@Component({
  selector: 'app-project-tree2',
  templateUrl: './project-tree2.component.html',
  styleUrls: ['./project-tree2.component.scss']
})
export class ProjectTree2Component {
    @Input() directory: Directory2 = {} as Directory2;
    @Input() last: boolean = true;
    @Input() indent: string = "";

    collapsed: boolean = true;

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
        this.collapsed = !this.collapsed;
    }

}
