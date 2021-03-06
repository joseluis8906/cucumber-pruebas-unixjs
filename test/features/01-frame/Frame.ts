export class Frame {

    public addChild(child: any): string {
        return "child added";
    }

    public getChilds(): Array<Object> {
        return [{},{},{}];
    }

    public addEvent(event: string, cb: Function): string {
        return "handler added";
    }

    public removeEvent(event: string): string {
        return "handler removed";
    }

    public setHtml(html: string): string {
        return "html setted";
    }

    public setZIndex(zIndex: number): string {
        return "z-index setted";
    }

    public setSize(width: number, height: number): string {
        return "dimension setted";
    }

    public getSize(): Array<Number> {
        return [50, 50];
    }

    public getHtml(): string {
        return "<div></div>";
    }

    public setPosition(x: Number, y: Number): string {
        return "position setted";
    }

    public getPosition(): Array<Number> {
        return [50,50];
    }

    public setFocus(): string {
        return "focus setted";
    }

    public setBackgroundColor(bgColor: string): string {
        return "background color setted";
    }

    public setBackgroundImage(image: string): string {
        return "image setted";
    }

    public setBackgroundPosition(position: Array<Number>): string {
        return "background position setted";
    }

    public setBackgroundSize(size: Array<Number>): string {
        return "background size setted";
    }

    public setBorderSize(size: Number): string {
        return "background size setted";
    }

    public setClass(cssClass: string): string {
        return "class setted";
    }

    public setParent(parent: Object): string {
        return "parent setted";
    }

    public setColor(color: string): string {
        return "color setted";
    }

    public setCursor(cursor: string): string {
        return "cursor setted";
    }

    public setDisplay(display: string): string {
        return "display setted";
    }

    public setFontSize(size: number): string {
        return "font size setted";
    }

    public setFontWeight(weight: string): string {
        return "font weight setted";
    }

    public setMargin(margin: number): string {
        return "margin setted";
    }

    public setPadding(margin: number): string {
        return "padding setted";
    }

    public setOpacity(opacity: number): string {
        return "opacity setted";
    }

    public setSelectable(selectable: boolean): string {
        return "selectable setted";
    }

    public setVAlign(valign: string): string {
        return "vertical align setted";
    }

    public setVisibility(visibility: number): string {
        return "visibility setted";
    }
}

export const frame = new Frame();