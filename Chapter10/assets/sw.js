'use strict';
const VERSION = 'v1';
const assets = [
    '/assets/css/style.css',
    '/assets/favicon.ico',
    '/assets/scripts/script.js'
];
self.oninstall = event => event.waitUntil(async function () {
    const cache = await caches.open('static');
    await caches.addAll(ASSETS);
    return self.skipWaiting();
});
self.onactivate = event => event.waitUntil(self.clients.claim());
self.onfetch = event => event.respondWith(
    caches.match(event.request).then(function (resp) {
        return resp || fetch(event.request).then(function (response) {
            caches.open(VERSION).then(function (cache) {
                cache.put(event.request, response.clone());
            });
            return response;
        });
    }).catch(function () {
        console.log('Error: ');
    });
);

this.addEventListener('activate', function (event) {
    var cacheWhitelist = ['v2'];

    event.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (cacheWhitelist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});