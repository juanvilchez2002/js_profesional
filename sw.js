//se escribe el service workers
//sirven para hacer que nuestras aplicaciones funcionen 'Offline
//Usados en ´Progressive Web Apps - PWA', los 'ServiceWorkers' son una capa que vive entre el
//navegador y el Internet

//Parecido a como lo hacen los 'proxys', van a interceptar peticiones para guardar el resultado 
//en cache y la proxima vez que se haga la petición tomar del cache ese resultado


const VERSION = "v1"

//self es el this para los ServiceWorkers
//añadimos un event que hara instalar el service workerers
//y el callback recibira un event
self.addEventListener('install', event => {
    //creando un precache, se le dara una lista de recursos, assets, que se desea
    //mantener en el cache
    //waitUntil => espera hasta que se complete el precache
    event.waitUntil(precache());
});

//cada vez que hago una petición
self.addEventListener('fetch', event => {
    const request = event.request;
    //solo trabajar con peticiones 'get', no haremos nada
    if(request.method !== "GET"){
        return
    }

    //buscar en cache
    event.respondWith(cachedResponse(request))

    //actualizar el cache
    event.waitUntil(updateCache(request))
})

//creamos la función precache
async function precache(){
    //trabajamos con el api de dom de caches
    //instanciamos el cache en VERSION
    const cache = await caches.open(VERSION)

    //esto es mio
    console.log(cache)
    //añadimos varios recursos
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugin/AutoPlay.js',
        '/assets/plugin/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
      ]);
}

//
async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
  }

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
  }