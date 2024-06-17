const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//! Se agrego un . por ser clases
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

//! Se agrego async para el await
async function displayUser(username) {
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    //! Se convirtio a json la respuesta
    const data = await response.json();
    console.log(data);
    //! Se cambio cambio '' por ``
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);