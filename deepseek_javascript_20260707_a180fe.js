// 简单的 Service Worker - 仅用于触发安装提示，不缓存任何内容
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  clients.claim();
});

self.addEventListener('fetch', (event) => {
  // 全部从网络获取，绝不缓存
  event.respondWith(fetch(event.request));
});