export interface Directory{
    name: string;
    link?: string;
    type: string;
    collapsed: boolean;
    items: Directory[];
}
