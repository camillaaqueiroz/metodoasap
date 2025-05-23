document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Inscrição realizada com sucesso! Você receberá um e-mail em breve.');
  this.reset();
});
