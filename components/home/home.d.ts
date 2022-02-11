import { LitElement } from 'lit-element';
interface ResponseType {
    titulo: string;
}
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class HomeView extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     * The name to say "Hello" to.
     */
    name: string;
    obj: ResponseType;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'home-view': HomeView;
    }
}
export {};
//# sourceMappingURL=home.d.ts.map