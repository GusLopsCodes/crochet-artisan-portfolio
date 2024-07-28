window.onscroll = function() {
    const backToTopLink = document.querySelector('.footer-link');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopLink.style.display = 'block';
    } else {
      backToTopLink.style.display = 'none';
    }
  };

  document.getElementById('backToTop').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do link
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });