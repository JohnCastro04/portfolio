document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("particles");
  const totalParticles = 20; 

  for (let i = 0; i < totalParticles; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    particle.style.left = `${Math.random() * 100}%`;

    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.animationDuration = `${15 + Math.random() * 10}s`;
    particle.style.animationDelay = `${-Math.random() * 20}s`;

    container.appendChild(particle);
  }
});
