---
layout: null
---
var urlsToCache = [];

// Cache assets
{% for asset in site.static_files %}
urlsToCache.push("{{ asset.path | absolute_url }}");
{% endfor %}

// Cache pages
{% for page in site.html_pages %}
urlsToCache.push("{{ page.url | absolute_url }}")
{% endfor %}

// Cache name: adjust version number to invalidate service worker cache.
var CACHE_NAME = "geise-group-cache-" + {{ "now" | date: "%Y%m%d%H%M%S" }};

self.addEventListener("install", function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener("fetch", function(event) {
	event.respondWith(
		caches.open(CACHE_NAME).then(function(cache) {
			return cache.match(event.request).then(function(response) {
				return (
					response ||
					fetch(event.request).then(function(response) {
						cache.put(event.request, response.clone());
						return response;
					})
				);
			});
		})
	);
});

self.addEventListener("fetch", function(event) {
	event.respondWith(
		caches.open(CACHE_NAME).then(function(cache) {
			return fetch(event.request).then(function(response) {
				cache.put(event.request, response.clone());
				return response;
			});
		})
	);
});

// Clean out old caches
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					if (cacheName !== CACHE_NAME) {
						return true;
					}
				}).map(function(cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
});