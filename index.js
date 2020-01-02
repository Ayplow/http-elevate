addEventListener('fetch', event =>
  event.respondWith(
    event.request
      .json()
      .then(fetch)))
