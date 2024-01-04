import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
    // Text content
    @Input() text: string = "";

    // Units
    @Input() units: string = "rem";

    // Text styles
    @Input() color: string = "0 0 0";
    @Input() opacity: number = 1;
    @Input() align: string = 'left';
    @Input() font: string = "";
    @Input() size: number = 1;
    @Input() weight: string = "normal";
    @Input() decoration: string = "none";
    @Input() transform: string = "none";
    @Input() display: string = "inline";

    // Padding styles
    @Input() paddingX: string = "auto";
    @Input() paddingY: string = "auto";
    @Input() paddingTop: string = "auto";
    @Input() paddingBottom: string = "auto";
    @Input() paddingLeft: string = "auto";
    @Input() paddingRight: string = "auto";

    // Margin styles
    @Input() marginX: string = "auto";
    @Input() marginY: string = "auto";
    @Input() marginTop: string = "auto";
    @Input() marginBottom: string = "auto";
    @Input() marginLeft: string = "auto";
    @Input() marginRight: string = "auto";

    textColor: string = ""

    letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lines: string[] = [];

    ngOnInit()
    {
        this.textColor = "rgb(" + this.color + ")";
        this.splitLines()
    }

    ngOnChanges()
    {
        this.textColor = "rgb(" + this.color + ")";
        this.splitLines()
    }

    private splitLines()
    {
        this.lines = this.text.split('\n');
        return this.lines
    }

    public setPaddingLeft()
    {
        if(this.paddingX != "auto")
        {
            return this.paddingX + this.units
        }
        return this.paddingLeft + this.units
    }

    public setPaddingTop()
    {
        if(this.paddingY != "auto")
        {
            return this.paddingY + this.units
        }
        return this.paddingTop + this.units
    }

    public setPaddingRight()
    {
        if(this.paddingX != "auto")
        {
            return this.paddingX + this.units
        }
        return this.paddingRight + this.units
    }

    public setPaddingBottom()
    {
        if(this.paddingY != "auto")
        {
            return this.paddingY + this.units
        }
        return this.paddingBottom + this.units
    }

    public setMarginLeft()
    {
        if(this.marginX != "auto")
        {
            return this.marginX + this.units
        }
        return this.marginLeft + this.units
    }

    public setMarginTop()
    {
        if(this.marginY != "auto")
        {
            return this.marginY + this.units
        }
        return this.marginTop + this.units
    }

    public setMarginRight()
    {
        if(this.marginX != "auto")
        {
            return this.marginX + this.units
        }
        return this.marginRight + this.units
    }

    public setMarginBottom()
    {
        if(this.marginY != "auto")
        {
            return this.marginY + this.units
        }
        return this.marginBottom + this.units
    }




}
