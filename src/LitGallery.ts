
import { LitElement, html, customElement, property, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

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

	@property()
    fetchEvent = 'fetch-event';

	@property()
    obj = {};

	render() {
		let returnHTML;
		switch (this.view) {
			case 'home':
			default:
				returnHTML = html`
        <home-view .obj="${this.obj}"></home-view>
        `;
				break;
			case 'gallery':
				returnHTML = html`
          <gallery-view .silders="${this.obj}"></gallery-view>
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
		
		fetch(this.json)
			.then(response => {
				if (!response.ok) {
					throw new Error("HTTP error " + response.status);
				}
				return response.json();
			})
			.then(json => {
				this.obj = json;
			})
			.catch(function (error) {
				console.error(error.message);
			})
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		this.removeEventListener('nav-navigation', this.handleNavigation);
	}

	handleNavigation(e: any): void {
		this.view = e.detail;
	}
}