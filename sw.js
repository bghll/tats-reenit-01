
var cacheName = 'tatsreenit01-01'; 

var filesToCache = [
    '/',    
    '/index.html',    
    '/css/style.css',  
    '/js/main.js'  
];  

// Add all files to cache once SW installed
self.addEventListener('install', function(e) { 
    e.waitUntil(
        caches.open(cacheName).then(function(cache) { 
            return cache.addAll(filesToCache);   
        })    
    );  
});

/* Serve cached content when offline */ 
self.addEventListener('fetch', function(e) {  
    e.respondWith( 
        caches.match(e.request).then(function(response) {  
            return response || fetch(e.request);
        })   
    );  
});
