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
    view: string;
    obj: ResponseType;
    navigationEvent: string;
    render(): import("lit-element").TemplateResult;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'home-view': HomeView;
    }
}
export {};
//# sourceMappingURL=home.d.ts.map