
import { LitElement, html, customElement, property, css } from 'lit-element';

// import Swiper bundle with all modules installed
import Swiper from 'swiper';

// import 'swiper/css/bundle';


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
		color: white
    }
	.swiper {
		width: 600px;
		height: 300px;
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
	@property({ type: Number })
	count = 0;

	render() {
		return html`
			<link
			rel="stylesheet"
			href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
			/>

			<!-- Slider main container -->
			<div class="swiper">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					<!-- Slides -->
					<div class="swiper-slide">Slide 1</div>
					<div class="swiper-slide">Slide 2</div>
					<div class="swiper-slide">Slide 3</div>
				</div>
				<!-- If we need pagination -->
				<div class="swiper-pagination"></div>

				<!-- If we need navigation buttons -->
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div>
		`;
	}

	firstUpdated(): void {
		console.log(this.shadowRoot.querySelector('.swiper'))
		// init Swiper:
		const swiper = new Swiper(this.shadowRoot.querySelector('.swiper'), {
			// Optional parameters
			direction: 'horizontal',
			loop: true,

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
			},

		});
		console.log(swiper);
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
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
