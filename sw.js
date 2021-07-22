let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/static/media/cricbaylogo.9fcb80e5.png",
                "static/js/0.chunk.js",
                "static/js/1.chunk.js",
                "manifest.json",
                "favicon.ico",
                "logo192.png",
                "static/js/main.chunk.js",
                "static/js/bundle.js",
                "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap",
                "index.html",
                "/",
                "/home",
                "bootstrap/dist/css/bootstrap.min.css",
                "index.css",

            ]);
        })
    );
});

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches
                .match(event.request)
                .then((resp) => {

                    if (resp) {
                        return resp;
                    }
                    let requestUrl = event.request.clone();
                    fetch(requestUrl);
                })
                .catch((error) => {

                })
        );
    }
});
