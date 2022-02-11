
import { LitElement, html, customElement, property, css } from 'lit-element';
import './components/home/home';
import './components/gallery/gallery';
import './components/end/end'
import './components/nav/nav'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('lit-gallery')
export class LitGallery extends LitElement {
  static styles = css`
  
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'gallery';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: String })
  view = 'home';

  @property({ type: String })
  json = '';

  render() {
    let returnHTML;
    switch (this.view) {
      case 'home':
      default:
        returnHTML = html`
        <home-view></home-view>
        `;
        break;
      case 'gallery':
        returnHTML = html`
          <gallery-view></gallery-view>
        `;
        break;
      case 'end':
        returnHTML = html`
          <end-view></end-view>
        `;
        break;
    }
    return html`
      <nav-view></nav-view>
      ${returnHTML}`;

  }

  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener('nav-navigation', this.handleNavigation);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('nav-navigation', this.handleNavigation);
  }

  handleNavigation(e: any): void {
    this.view = e.detail;
    console.log(this.view)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-gallery': LitGallery;
  }
}