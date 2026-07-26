// Service worker mínimo, só para o app ser reconhecido como instalável (PWA).
// Não faz cache agressivo de nada para não interferir com Firebase, câmera ou GPS.
self.addEventListener("install", function(event){
  self.skipWaiting();
});

self.addEventListener("activate", function(event){
  self.clients.claim();
});

self.addEventListener("fetch", function(event){
  // Deixa o navegador fazer a requisição normalmente (sem cache customizado).
});
