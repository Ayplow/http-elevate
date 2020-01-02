# Http Client Elevator

A very simple script written for the [Cloudflare Worker](https://www.cloudflare.com/products/cloudflare-workers/) platform.

If your HTTP client is missing particular features like [headers](# "Link to TTS issue"), you can use this as an API to polyfill them. This is done by providing the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) through a HTTP POST interface. Keep in mind that this comes with the performance cost of serializing your request parameters into JSON
