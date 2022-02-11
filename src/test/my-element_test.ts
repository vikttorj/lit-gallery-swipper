import {LitGallery} from '../lit-gallery.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('lit-gallery', () => {
  test('is defined', () => {
    const el = document.createElement('lit-gallery');
    assert.instanceOf(el, LitGallery);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<lit-gallery></lit-gallery>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<lit-gallery name="Test"></lit-gallery>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<lit-gallery></lit-gallery>`)) as LitGallery;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
