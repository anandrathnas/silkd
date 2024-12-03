// ==UserScript==
// @name         Silkd jwt.io
// @namespace    http://tampermonkey.net/
// @version      2024-12-03
// @description  try to take over the world!
// @author       anandrathnas
// @match        https://jwt.io/
// @match        https://jwt.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jwt.io
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  console.log('TM init');

  let retryIndex = 0;
  const maxRetry = 10;

  const removeElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.remove();
    }
  };

  const updateStyle = (selector, styles) => {
    const element = document.querySelector(selector);
    if (element) {
      Object.assign(element.style, styles);
    }
  };
  const focusOn = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.tabIndex = 0
      element.focus()
      element.click()
    }
  };

  const interval = setInterval(() => {
    try {
      removeElement('section.banner-jwt');
      removeElement('div.warning');
      removeElement('nav.navbar');
      removeElement('div.top-banner-bg');
      removeElement('div.top-banner');
      removeElement('section.sources');
      removeElement('div.tokens-created');
      removeElement('div.jtw-ebook-banner');
      removeElement('footer');
      updateStyle('section.debugger-jwt', { padding: '0' });
      updateStyle('div.top-banner-open', { padding: '0' });
      removeElement('h1');
      focusOn('div.CodeMirror-scroll')
    } catch (error) {
      console.error('Error during DOM manipulation:', error);
    }

    if (++retryIndex > maxRetry) {
      clearInterval(interval);
      console.log('TM done');
    }
  }, 500);
})();
