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

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  })
  .then(res=> res.json())
}

function update(song) {
  return fetch(`${BASE_URL}/${song._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(song)
  })
  .then(res=> res.json())
}
export {
	create,
  getAll,
  deleteOne,
  update,
}