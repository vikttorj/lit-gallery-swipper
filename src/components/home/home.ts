
import { LitElement, html, customElement, property, css } from 'lit-element';


interface ResponseType {

    titulo: string;
    
}

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

export class HomeView extends LitElement {
    static styles = css`
    :host {
      display: block;
      padding: 15px;
      color: white;
      text-align: center;
    }
    figure{
        margin: 0;
        position: absolute;
        top: 0;
        left: 50%;
        -ms-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 100%;
        max-width: 100%;
        min-height: 100vh;
        height: 100%;
        z-index: -1;
        overflow: hidden;
        background-color: #000;
    }
    figure img {
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        min-width: 100%;
        min-height: 100%;
        opacity: 0.25;
    }
    header {
        max-width: 650px;
        margin: 0 auto;
    }
    h1 {
        margin: 0;
        padding-top: 30px;
        font: bold 48px/57px "RobotoBold",Arial,sans-serif,helvetica;
        color: #fff;
    }
    .view_gallery{
        margin-top: 30px;
        display: inline-block;
        background-color: #550455;
        height: 48px;
        padding: 0 24px 0 24px;
        border-radius: 48px;
        font: normal 16px/48px "RobotoBold",Arial,sans-serif,helvetica;
        color: #fff;
        text-decoration: none;
        vertical-align: middle;
        position: relative;
        transition: all 200ms ease-out 0s;
        box-shadow: none;
        border: 0;
    }
    .view_gallery:hover{
        background-color: #a30000;
        color: #fff;
    }
  `;

    /**
     * The name to say "Hello" to.
     */
    @property()
    name = 'HOME';
    
    @property()
    view = '';
    
    @property()
    obj: ResponseType = {
        titulo: ''
    };

    @property()
    navigationEvent = 'nav-navigation';

    render() {
        return html`
      <article itemtype="http://schema.org/NewsArticle" class="gallery-cover-article">
        <header class="gallery-cover-article__header">
            <h2 class="gallery-cover-article__kicker">Música</h2>
            <h1 class="gallery-cover-article__heading" itemprop="headline">${this.obj.titulo}</h1>
            <p class="gallery-cover-article__author">
                <!-- react-text: 84 -->
                <!-- /react-text -->
                <!-- react-text: 85 -->REDACCIÓN TIRAMILLAS
                <!-- /react-text -->
            </p><time datetime="2022-02-07" itemprop="dateModified" class="gallery-cover-article__datetime">
                <!-- react-text: 87 -->Actualizado:
                <!-- /react-text --><span class="fecha" itemprop="dateModified">07/02/2022 11:23</span><span
                    class="hora"></span>
            </time>
            <meta itemprop="datePublished" content="2021-08-18">
            <meta itemprop="mainEntityOfPage">
        </header>
        <figure class="gallery-cover-article__multimedia" itemtype="https://schema.org/ImageObject">
            <meta itemprop="width" content="800">
            <meta itemprop="height" content="800"><img itemprop="url"
                src="https://phantom-marca.unidadeditorial.es/1923aaf27267df7824b60ba11122a9dc/assets/multimedia/imagenes/2022/02/04/16439743553177.jpg"
                class="gallery-cover-article__multimedia__item"
                alt="Sabrina Salerno posa en lencería y hace gimnasia con transparencias con 53 años">
        </figure>
        <nav class="gallery-cover-article__nav">
            <button class="view_gallery" @click=${this._onClick} part="button" data-view="gallery">
                    <!-- react-text: 98 -->Ver galería
                    <!-- /react-text --><i class="icon-gallery-forward"></i>
            </button>
        </nav>
    </article>
    `;
    }
    
    private _onClick(e: any ) {
        this.view = e.currentTarget.dataset.view;
        this.dispatchEvent(new CustomEvent(this.navigationEvent, { detail: this.view, composed: true }))
    }

}
