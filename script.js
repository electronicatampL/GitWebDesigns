document.addEventListener("DOMContentLoaded", () => {
    const musica = document.getElementById("musica");
  
    // Intentar reproducir automáticamente
    const playMusic = () => {
      musica.play().catch(() => {
        // Si falla, espera una interacción del usuario
        document.addEventListener("click", playMusic, { once: true });
      });
    };
  
    playMusic();
  });
  