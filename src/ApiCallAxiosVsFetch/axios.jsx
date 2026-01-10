import axios from "axios";

const instance = axios.create({
    baseURL:"https://official-joke-api.appspot.com",
})
export default instance;





// 1️⃣ How Fetch works
// Native to the browser — no installation required.

// Returns a Promise that resolves to a Response object.

// You usually have to manually parse JSON using .json() (and .json() itself is async).

// Errors only happen on network failures — HTTP 404/500 do not throw automatically; you must check response.ok.





// 2️⃣ How Axios works
// Needs installation: npm install axios.

// Works in browsers and Node.js.

// Automatically parses JSON responses — no need for .json().

// Automatically throws errors for HTTP 4xx/5xx responses.

// Lets you easily set global configs (like your baseURL).

// Has built-in request/response interceptors for logging, auth, etc.






// | Feature              | Fetch                        | Axios                       |
// | -------------------- | ---------------------------- | --------------------------- |
// | Built-in             | ✅ Yes                        | ❌ No (npm install)       |
// | JSON parsing         | Manual (`.json()`)           | Automatic                   |
// | HTTP error handling  | Must check `response.ok`     | Throws error automatically  |
// | Request cancellation | AbortController              | Built-in CancelToken        |
// | Upload progress      | Manual with `XMLHttpRequest` | Built-in `onUploadProgress` |
// | Interceptors         | ❌ No                        | ✅ Yes                    |
// | Node.js support      | ❌ No                        | ✅ Yes                    |







