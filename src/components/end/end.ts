
import {LitElement, html, customElement, property, css} from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
 @customElement('end-view')
export class EndView extends LitElement {
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
  name = 'END';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  render() {
    return html`
    <h1>FUCK, ${this.name}!</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'end-view': EndView;
  }
}
