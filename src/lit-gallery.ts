import { LitGallery } from './LitGallery.js';
import { HomeView } from './components/home/home.js'
import { GalleryView } from './components/gallery/gallery.js'
import { NavView } from './components/nav/nav.js'
import { EndView } from './components/end/end.js'


window.customElements.define('lit-gallery', LitGallery);
window.customElements.define('home-view', HomeView);
window.customElements.define('gallery-view', GalleryView);
window.customElements.define('nav-view', NavView);
window.customElements.define('end-view', EndView);
