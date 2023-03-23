function adicionarDorama() {
    var doramaVisto = document.getElementById('dorama').value
    
  var elementoListaDorama = document.getElementById('listaDorama')
  elementoListaDorama.innerHTML = elementoListaDorama.innerHTML + '<img src=' + doramaVisto + '>'
  document.getElementById('dorama').value = ''
    
  }