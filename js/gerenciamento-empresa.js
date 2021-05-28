
var btnEnviar = document.getElementById('enviar')
var selectProfissoes = document.getElementById('profissoes')
var value = selectProfissoes.options[selectProfissoes.selectedIndex].value;

var cardUserA = document.getElementById('userA')
var cardUserB = document.getElementById('userB')
var cardUserC = document.getElementById('userC')
var cardUserD = document.getElementById('userD')
var cardUserE = document.getElementById('userE')
var img1 = document.getElementById('fotoUsuario1')
var img2 = document.getElementById('fotoUsuario2')
var img3 = document.getElementById('fotoUsuario3')
var img4 = document.getElementById('fotoUsuario4')



btnEnviar.addEventListener("click", mudarValor);
 
function mudarValor() {
var value = selectProfissoes.options[selectProfissoes.selectedIndex].value;
    if (value == "valor4") {
      cardUserA.innerHTML = "Antonio"
      img1.setAttribute('src', './imagens/perfil-generica.jpg'); 

      cardUserB.innerHTML = "Rodrigo"
      img2.setAttribute('src', './imagens/generica_foto.jpeg'); 

      cardUserC.innerHTML = "Vanessa"
      img3.setAttribute('src', './imagens/vanessa.jpg'); 
    }

    if (value == "valor5") {
      cardUserA.innerHTML = "Sandro"
      img1.setAttribute('src', './imagens/sandro.jpg'); 
      cardUserB.innerHTML = "Elizabeth"
      img2.setAttribute('src', './imagens/generica_foto.jpeg'); 

      // cardUserC.innerHTML = "Vanessa"
      // img3.setAttribute('src', './imagens/vanessa.jpg'); 
    }

}

