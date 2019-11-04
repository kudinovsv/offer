(function() {
  const confirmation = document.getElementById('confirmation');
  const payBtn = document.getElementById('confirmation__pay-btn');
  let tariffClone;

  function tariffClick() {
    tariffClone = this.cloneNode(true);
    tariffClone.classList.remove('tariffs__tariff');
    payBtn.before(tariffClone);
    confirmation.style.display = 'flex';
  }

  function closeModal() {
    confirmation.style.display = 'none';
    tariffClone.remove();
  }

  const tariffList = document.getElementsByClassName('tariff');
  for (const tariff of tariffList) {
    tariff.addEventListener('click', tariffClick);
  }

  document.getElementById('confirmation__close-btn').addEventListener('click', closeModal);
  payBtn.addEventListener('click', closeModal);
  confirmation.addEventListener('click', closeModal);
  document.getElementById('confirmation__window').addEventListener('click', event => event.stopPropagation());
})();
