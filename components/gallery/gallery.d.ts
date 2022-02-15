import { LitElement } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class GalleryView extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     * The name to say "Hello" to.
     */
    name: string;
    silders: {
        multimedia: never[];
    };
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    render(): import("lit-element").TemplateResult;
    firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    foo(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'gallery-view': GalleryView;
    }
}
//# sourceMappingURL=gallery.d.ts.map