
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
  }

  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);

  function atualizarContador() {
    const dataAlvo = new Date('2025-08-08T00:00:00');
    const agora = new Date();
  
    const diff = dataAlvo - agora;
  
    if (diff <= 0) {
      // Quando a data já passou
      document.getElementById('contador').innerHTML = "Prazo encerrado!";
      clearInterval(intervalo);
      return;
    }
  
    const segundos = Math.floor((diff / 1000) % 60);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  
    document.getElementById('dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
  }
  
  const intervalo = setInterval(atualizarContador, 1000);
  atualizarContador(); // chama a função imediatamente para não esperar 1 segundo