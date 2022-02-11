import { LitElement } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class NavView extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     * The name to say "Hello" to.
     */
    name: string;
    view: string;
    navigationEvent: string;
    render(): import("lit-element").TemplateResult;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'nav-view': NavView;
    }
}
//# sourceMappingURL=nav.d.ts.map