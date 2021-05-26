var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};


fetch("viacep.com.br/ws/3050000/json/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));