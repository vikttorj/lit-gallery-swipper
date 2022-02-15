
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

export class GalleryView extends LitElement {
	static styles = css`
    :host {
		color: white
    }
	.swiper {
		height: 90vh;
	}
	.swiper-slide {
		display: flex;
		align-items: center;
	}
	.swiper-wrapper img{
		height: auto;
		width: 90%;
		margin: 0px auto;
    	display: block;
	}

  `;

	/**
	 * The name to say "Hello" to.
	 */
	 @property()
	 name = 'GALLERY';

	@property()
	silders = {
		multimedia: [{
			url: ''
		}]
	};

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
			<div class="swiper" id="swiper">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					<!-- Slides -->
					${this.silders.multimedia.map(slider => html `
						<div class="swiper-slide">
							<img src="${slider.url}" />
						</div>
					`)}
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
		console.log(this.shadowRoot ? this.shadowRoot.getElementById('swiper') : null)
		const ele = this.shadowRoot ? this.shadowRoot.getElementById('swiper') : '.swiper';
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
		// @ts-ignore
		const swiper = new Swiper(ele, {
			// Optional parameters
			direction: 'horizontal',
			loop: true,
			navigation: true,
			centeredSlides: true,
			spaceBetween: 50,

			// If we need pagination
			pagination: true,

		});
		console.log(swiper);
	}
}
