function salvarAlteracoes() {
    var botao = document.querySelector('.botao-final');
    var loading = document.getElementById('loading');
    var mensagem = document.getElementById('mensagem');
  
    botao.style.display = 'none';
    loading.style.display = 'block';
  
    setTimeout(function() {
      loading.style.display = 'none';
      mensagem.style.display = 'block';
    }, 2000);
  }
  