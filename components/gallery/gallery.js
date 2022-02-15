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
        this.silders = {
            multimedia: []
        };
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
					${this.silders.multimedia.map(slider => html `
						<div class="swiper-slide">
							<img src="${slider.url}" />
						</div>
					`)}
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
            navigation: true,
            centeredSildes: true,
            spaceBetween: 50,
            // If we need pagination
            pagination: true,
        });
        console.log(swiper);
    }
    connectedCallback() {
        super.connectedCallback();
        console.log(this.sliders);
        let sliders = `
		<div class="gallery-slide-article__figure__container">
			<figure class="gallery-slide-article__multimedia" style="transform: translateX(0%);">
				<div class="gallery-slide-article__multimedia__container" style="height: 1075px;"><img
						src="https://phantom-marca.unidadeditorial.es/1923aaf27267df7824b60ba11122a9dc/assets/multimedia/imagenes/2022/02/04/16439743553177.jpg"
						class="gallery-slide-article__multimedia__item"
						alt="Así se entrena Sabrina Salerno en el gimnasio a sus 53 años" itemprop="contentUrl"></div>
				<figcaption class="gallery-slide-article__caption">
					<h2 class="gallery-slide-article__caption-header">Así se entrena Sabrina Salerno en el gimnasio a sus 53
						años</h2>
					<p class="gallery-slide-article__caption-content" itemprop="description"><strong><a
								href="https://www.marca.com/tiramillas/musica/2021/09/28/6152eaffca4741cc738b466d.html"
								target="_blank">Sabrina Salerno</a></strong> revolucionó España en la <strong><a
								href="https://www.marca.com/tiramillas/musica/2021/03/22/60588e9646163fdc828b45db.html"
								target="_blank">gala de Fin de Año de 1987</a></strong> pero sigue deslumbrando entre sus
						seguidores a sus 53 años con fotos que comparte en sus redes sociales y que <strong><a
								href="https://www.marca.com/buzz/album/2020/06/22/5ef047e646163fda1f8b456d.html"
								target="_blank">se convierten en virales</a></strong>. La cantante italiana del mítico
						<strong><a href="https://www.marca.com/buzz/2020/02/10/5e40f26ae2704eb0868b459b.html"
								target="_blank">"boys, boys, boys"</a></strong> ha compartido ahora con sus seguidores como se
						entrena en el gimnasio.</p><!-- react-text: 31 -->
					<!-- /react-text --><span class="gallery-slide-article__author" itemprop="author">Instagram
						(@sabrinasalernofficial)</span>
				</figcaption>
			</figure>
			<figure class="gallery-slide-article__multimedia" style="transform: translateX(100%);">
				<div class="gallery-slide-article__multimedia__container" style="height: 1075px;"><img
						src="https://phantom-marca.unidadeditorial.es/8931f3ec05fcf651c46a240b54f1387f/resize/1300/assets/multimedia/imagenes/2022/02/07/16442290988817.jpg"
						class="gallery-slide-article__multimedia__item"
						alt="Sabrina Salerno comparte fotos en lencería con 53 años" itemprop="contentUrl"></div>
				<figcaption class="gallery-slide-article__caption">
					<h2 class="gallery-slide-article__caption-header">Sabrina Salerno comparte fotos en lencería con 53 años
					</h2>
					<p class="gallery-slide-article__caption-content" itemprop="description"><strong><a
								href="https://www.marca.com/tiramillas/musica/2021/09/28/6152eaffca4741cc738b466d.html"
								target="_blank">Sabrina Salerno</a></strong> revolucionó España en la <strong><a
								href="https://www.marca.com/tiramillas/musica/2021/03/22/60588e9646163fdc828b45db.html"
								target="_blank">gala de Fin de Año de 1987</a></strong> pero sigue deslumbrando entre sus
						seguidores a sus 53 años con fotos que comparte en sus redes sociales y que <strong><a
								href="https://www.marca.com/buzz/album/2020/06/22/5ef047e646163fda1f8b456d.html"
								target="_blank">se convierten en virales</a></strong>. La cantante italiana del mítico
						<strong><a href="https://www.marca.com/buzz/2020/02/10/5e40f26ae2704eb0868b459b.html"
								target="_blank">"boys, boys, boys"</a></strong> comparte con sus seguidores sus imágenes más
						íntimas.</p><!-- react-text: 39 -->
					<!-- /react-text --><span class="gallery-slide-article__author" itemprop="author">Instagram
						(@sabrinasalernofficial)</span>
				</figcaption>
			</figure>
			<figure class="gallery-slide-article__multimedia" style="transform: translateX(200%);">
				<div class="gallery-slide-article__multimedia__container" style="height: 1075px;"><img
						src="https://phantom-marca.unidadeditorial.es/319ccc5fd5418045ba5034cd9d916d26/assets/multimedia/imagenes/2022/02/04/16439738778875.jpg"
						class="gallery-slide-article__multimedia__item"
						alt="Así se entrena Sabrina Salerno en el gimnasio a sus 53 años" itemprop="contentUrl"></div>
				<figcaption class="gallery-slide-article__caption">
					<h2 class="gallery-slide-article__caption-header">Así se entrena Sabrina Salerno en el gimnasio a sus 53
						años</h2>
					<p class="gallery-slide-article__caption-content" itemprop="description"><strong><a
								href="https://www.marca.com/tiramillas/musica/2021/09/28/6152eaffca4741cc738b466d.html"
								target="_blank">Sabrina Salerno</a></strong> revolucionó España en la <strong><a
								href="https://www.marca.com/tiramillas/musica/2021/03/22/60588e9646163fdc828b45db.html"
								target="_blank">gala de Fin de Año de 1987</a></strong> pero sigue deslumbrando entre sus
						seguidores a sus 53 años con fotos que comparte en sus redes sociales y que <strong><a
								href="https://www.marca.com/buzz/album/2020/06/22/5ef047e646163fda1f8b456d.html"
								target="_blank">se convierten en virales</a></strong>. La cantante italiana del mítico
						<strong><a href="https://www.marca.com/buzz/2020/02/10/5e40f26ae2704eb0868b459b.html"
								target="_blank">"boys, boys, boys"</a></strong> ha compartido ahora con sus seguidores como se
						entrena en el gimnasio.</p><!-- react-text: 47 -->
					<!-- /react-text --><span class="gallery-slide-article__author" itemprop="author">Instagram
						(@sabrinasalernofficial)</span>
				</figcaption>
			</figure>
		</div>
		`;
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
__decorate([
    property()
], GalleryView.prototype, "name", void 0);
__decorate([
    property()
], GalleryView.prototype, "silders", void 0);
__decorate([
    property({ type: Number })
], GalleryView.prototype, "count", void 0);
GalleryView = __decorate([
    customElement('gallery-view')
], GalleryView);
export { GalleryView };
//# sourceMappingURL=gallery.js.map