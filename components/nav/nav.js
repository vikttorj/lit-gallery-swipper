var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let NavView = class NavView extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = 'NAV';
        this.view = '';
        this.navigationEvent = 'nav-navigation';
    }
    render() {
        return html `
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
    _onClick(e) {
        this.view = e.currentTarget.dataset.view;
        this.dispatchEvent(new CustomEvent(this.navigationEvent, { detail: this.view, composed: true }));
    }
};
NavView.styles = css `
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
  `;
__decorate([
    property()
], NavView.prototype, "name", void 0);
__decorate([
    property()
], NavView.prototype, "view", void 0);
__decorate([
    property()
], NavView.prototype, "navigationEvent", void 0);
NavView = __decorate([
    customElement('nav-view')
], NavView);
export { NavView };
//# sourceMappingURL=nav.js.map