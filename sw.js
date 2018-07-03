/* global caches fetch skipWaiting */

var cacheName = '1530647562308',
    origin = '/time-keeper/';

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(
                [
                    origin,
                    origin + 'index.html',
                    origin + 'styles/styles.css',
                    origin + 'scripts/app.js',
                    origin + 'fonts/OpenSans-Regular.ttf',
                    origin + 'fonts/OpenSans-Bold.ttf',
                    origin + 'fonts/fontawesome-webfont.woff2',
                    origin + 'icons/launcher-icon-1x.png',
                    origin + 'icons/launcher-icon-2x.png',
                    origin + 'icons/launcher-icon-4x.png',
                    origin + 'manifest.json',
                    origin + 'favicon.ico'
                ]
            );
        }).catch(function (err) {
            console.log(err);
        })
    );
});

this.addEventListener('fetch', function (event) {
    var urlWithoutQueryParams = event.request.url.split('?')[0];

    event.respondWith(caches.match(urlWithoutQueryParams).then(function (response) {
        if (response) {
            return response;
        }

        return fetch(event.request);
    }));
});

this.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(keyList => Promise.all(keyList.map(key => {
            if (key !== cacheName) {
                return caches.delete(key);
            } else {
                return null;
            }
        })))
    );
});

this.addEventListener('message', messageEvent => {
    if (messageEvent.data === 'skipWaiting') {
        return skipWaiting();
    } else {
        return null;
    }
});
