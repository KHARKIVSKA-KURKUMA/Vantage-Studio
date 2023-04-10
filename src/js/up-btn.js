const upBtn = document.getElementById('up');
window.onscroll = function () {
  scrollFunction();
};
upBtn.addEventListener('click', topFunction);
function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    upBtn.style.display = 'flex';
    upBtn.classList.remove('is-hidden');
  } else {
    upBtn.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
