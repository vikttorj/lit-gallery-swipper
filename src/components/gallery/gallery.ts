
import {LitElement, html, customElement, property, css} from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
 @customElement('gallery-view')
export class GalleryView extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'GALLERY';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  render() {
    return html`
    <h1>FUCK, ${this.name}!</h1>
    <button @click=${this._onClick} part="button">
    Click Count: ${this.count}
    </button>
    `;
  }

  private _onClick() {
    this.count++;
  }

  foo(): string {
    return 'foo';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gallery-view': GalleryView;
  }
}
