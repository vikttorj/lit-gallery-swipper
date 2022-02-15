var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let GalleryView = class GalleryView extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = 'GALLERY';
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
    }
    render() {
        return html `
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
    firstUpdated() {
        console.log(this.shadowRoot.querySelector('.swiper'));
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
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    foo() {
        return 'foo';
    }
};
GalleryView.styles = css `
    :host {
		color: white
    }
	.swiper {
		width: 600px;
		height: 300px;
	}
  `;
__decorate([
    property()
], GalleryView.prototype, "name", void 0);
__decorate([
    property({ type: Number })
], GalleryView.prototype, "count", void 0);
GalleryView = __decorate([
    customElement('gallery-view')
], GalleryView);
export { GalleryView };
//# sourceMappingURL=gallery.js.map