const BASE_URL = '/api/songs'

function create(song) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(song)
  })
	.then(res => res.json())
}

function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}

export {
	create,
  getAll,
  
}