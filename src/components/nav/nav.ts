
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
        nav {
            width: 100%;
            height: 56px;
            background-color: #550455;
        }
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            height: 56px;
            justify-content: flex-end;
            align-items: center;
        }
        ul li{
            margin: 0 15px;
        }
        button { 
            cursor: pointer;
            background: transparent;
            border: 0;
            color: white;
            text-transform: uppercase;
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
