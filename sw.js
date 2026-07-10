// 强制清除旧缓存并更新到最新版本
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // 清除所有旧缓存
  caches.keys().then(cacheNames => {
    return Promise.all(cacheNames.map(name => caches.delete(name)));
  });
  clients.claim();
});

// 不再缓存任何请求，全部从网络获取
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
