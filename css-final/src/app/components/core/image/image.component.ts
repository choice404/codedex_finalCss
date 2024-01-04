import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
    @Input() dir: string = "left";
    @Input() width: string = "100";
    @Input() height: string = "100";
    @Input() units: string = "px";
    @Input() image: string = "";
    @Input() alt: string = "";
    @Input() shape: string = "square";
    @Input() radius: string = "0";
    @Input() objectFit: string = "cover";

    isCircle: boolean = false;
    imgDisplay: string = "";

    ngOnInit()
    {
        this.imgDisplay = this.image;
        if(this.shape == "circle")
        {
            this.isCircle = true;
        }
    }
}
