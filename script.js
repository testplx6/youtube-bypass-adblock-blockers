// ==UserScript==
// @name         Customizable YouTube Iframe with URL Change Detection
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Customizes the YouTube iframe with easy-to-adjust settings and reacts to URL changes
// @author       You
// @match        *://*youtube.com/*
// @match        *://youtube.com/*
// @match        *://www.youtube.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Function to extract the video ID from the current URL
    function getVideoIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('v');
    }

    // Function to replace the YouTube player content with a custom iframe
    function replacePlayerContent() {
        const videoId = getVideoIdFromUrl(); // Retrieves the video ID for the current page
        if (videoId) {
            const playerElement = document.getElementById('player'); // Targets the YouTube player element
            if (playerElement) {
                playerElement.innerHTML = ''; // Clears existing player content
                playerElement.style.paddingBottom = '56.25%'; // Maintains aspect ratio (16:9)
                playerElement.style.position = 'relative';
                playerElement.style.display = 'block';
                playerElement.style.width = '100%';

                // Customizable iframe settings
                const settings = {
                    autoplay: 1, // 0: Off, 1: On
                    controls: 1, // 0: Hide controls, 1: Show controls
                    loop: 0, // 0: Do not loop, 1: Loop
                    mute: 0, // 0: Unmuted, 1: Muted
                    rel: 0, // 0: Do not show related videos, 1: Show related videos
                    start: 0, // Start seconds
                    end: 0 // End seconds
                };

                // Constructs the iframe URL with the specified settings
                let src = `https://www.youtube.com/embed/${videoId}?autoplay=${settings.autoplay}&controls=${settings.controls}&loop=${settings.loop}&mute=${settings.mute}&rel=${settings.rel}&start=${settings.start}&end=${settings.end}`;

                // Creates and configures the iframe element
                const iframe = document.createElement('iframe');
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.position = "absolute";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.src = src;
                iframe.frameBorder = "0";
                iframe.allowFullscreen = true;

                // Appends the iframe to the player element
                playerElement.appendChild(iframe);
                console.log('Custom YouTube iframe inserted for video ' + videoId);
            } else {
                console.log('Player element not found');
            }
        }
    }

    // Function to wait for a specific element to be present in the DOM
    function waitForElement(selector, delay = 50, tries = 200) {
        return new Promise((resolve, reject) => {
            const element = document.querySelector(selector);
            if (element) {
                resolve(element);
                return;
            }
            if (tries === 0) {
                reject(new Error('Element not found'));
                return;
            }
            setTimeout(() => {
                waitForElement(selector, delay, tries - 1).then(resolve, reject);
            }, delay);
        });
    }

    // Wait for the player element to be available before executing replacePlayerContent
    waitForElement('#player').then(replacePlayerContent).catch(error => console.error(error));

    // Observes URL changes to detect navigation and reapply the customization
    let lastUrl = location.href;
    new MutationObserver(() => {
        const currentUrl = location.href;
        if (currentUrl !== lastUrl) {
            lastUrl = currentUrl;
            waitForElement('#player').then(replacePlayerContent).catch(error => console.error(error));
        }
    }).observe(document, {subtree: true, childList: true});
})();
