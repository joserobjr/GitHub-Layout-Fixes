// ==UserScript==
// @name         Align GitHub Headers
// @namespace    http://github.com/GameModsBr
// @version      0.4
// @description  I hate that the GitHub headers are misaligned in the new layout, so I made this to fix that
// @author       joserobjr
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let addGlobalStyle = function(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
    setTimeout(function(){
        let pagehead = 'main > div.hide-full-screen ';
        addGlobalStyle(pagehead+' > * { max-width: 1280px; margin-left: auto; margin-right: auto; }');
        addGlobalStyle(pagehead+' { border-bottom: 1px solid #e1e4e8 !important; }');
        addGlobalStyle(pagehead+' > nav.UnderlineNav { box-shadow: none !important; overflow: visible !important; }');
        addGlobalStyle(pagehead+' > nav > div.position-absolute.pr-lg-5 { position: inherit !important; padding: 0 !important; }');
        addGlobalStyle(pagehead+' > nav > div.position-absolute.pr-lg-5 > details > summary > div { padding-right: 0 !important; }');
        addGlobalStyle(pagehead+' > nav > div.position-absolute.pr-lg-5 > details > details-menu { margin-right: -10px; }');
    }, 5);
})();
