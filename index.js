addEventListener('fetch', event =>
  event.respondWith(handleRequest(event.request)),
)

async function handleRequest(request) {
  const { searchParams } = new URL(request.url)
  const init = searchParams.has('init')
    ? JSON.parse(searchParams.get('init'))
    : await request.json()
  const resource = searchParams.get('resource')

  return fetch(resource, init)
}