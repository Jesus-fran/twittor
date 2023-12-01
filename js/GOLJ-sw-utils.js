function actualizaCacheDinamico(dynamicCache, req, res) {
    // Si encontró el recurso
    if (res.ok) {
        // Si encontró abre el cache dynamiCache
        return caches.open(dynamicCache).then(
            cache => {
                // Manda a la cache lo solicitado y lo respondido
                cache.put(req, res.clone());
                // y retorna la respuesta y la clona
                return res.clone();
            }
        );

    } else {
        // Si no lo encontró, retorna la respuesta
        return res;
    }
}

