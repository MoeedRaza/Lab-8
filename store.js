const STORE_API = 'http://localhost:3000';

async function storeRequest(path, options = {}) {
  const response = await fetch(`${STORE_API}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
  });
  if (!response.ok) throw new Error(`Store API returned ${response.status}`);
  return response.json();
}

function showStoreMessage(message, isError = false) {
  let notice = document.querySelector('#store-notice');
  if (!notice) {
    notice = document.createElement('div');
    notice.id = 'store-notice';
    notice.className = 'container section-copy py-2';
    document.body.prepend(notice);
  }
  notice.textContent = message;
  notice.style.color = isError ? '#ff5f68' : '#16e0ff';
}
