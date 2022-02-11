
import { LitElement, html, customElement, property, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('nav-view')
export class NavView extends LitElement {
    static styles = css`
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
  `;

    /**
     * The name to say "Hello" to.
     */
    @property()
    name = 'NAV';

    @property()
    view = '';

    @property()
    navigationEvent = 'nav-navigation';


    render() {
        return html`
        <nav>
            <ul>
                <li><button @click=${this._onClick} part="button" data-view="home">Home</button></li>
                <li><button @click=${this._onClick} part="button" data-view="gallery">Gallery</button></li>
                <li><button @click=${this._onClick} part="button" data-view="end">End</button></li>
            </ul>
        </nav>
      <h1> FUCK ${this.name}</h1>
    `;
    }


    private _onClick(e: any ) {
        this.view = e.currentTarget.dataset.view;
        this.dispatchEvent(new CustomEvent(this.navigationEvent, { detail: this.view, composed: true }))
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'nav-view': NavView;
    }
}
