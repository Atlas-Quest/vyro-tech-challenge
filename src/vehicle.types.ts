// move to media handling component in future
export type Media = {
    src: string;
    alt: string;
    placement: "featured" | "gallery";
};

export interface Vehicle {
    name: string;
    condition: "new" | "used" | "demo";
    media: Array<Media>;
    is_sold: boolean;
    code: any;
}