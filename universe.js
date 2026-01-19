// ============================================
// UNIVERSE BACKGROUND - OPTIMIZED FOR PERFORMANCE
// ============================================

(function () {
  // Create universe container
  const universe = document.createElement('div');
  universe.className = 'universe-bg';
  document.body.prepend(universe);

  // REDUCED Configuration for better performance
  const config = {
    stars: 40,           // Reduced from 80
    comets: 1,           // Reduced from 2
    shootingStars: 2,    // Reduced from 3
    particles: 10        // Reduced from 20
  };

  // Create stars
  for (let i = 0; i < config.stars; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Random size
    const sizes = ['small', 'medium', 'large'];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    star.classList.add(size);

    // Random position
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';

    // Random animation duration for variety
    star.style.setProperty('--duration', (3 + Math.random() * 5) + 's');
    star.style.animationDelay = Math.random() * 4 + 's';

    universe.appendChild(star);
  }

  // Create comets
  for (let i = 0; i < config.comets; i++) {
    const comet = document.createElement('div');
    comet.className = 'comet';

    comet.style.top = Math.random() * 30 + '%';
    comet.style.right = '-100px';
    comet.style.setProperty('--comet-duration', (10 + Math.random() * 5) + 's');
    comet.style.animationDelay = (i * 15 + Math.random() * 10) + 's';

    universe.appendChild(comet);
  }

  // Create shooting stars
  for (let i = 0; i < config.shootingStars; i++) {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';

    shootingStar.style.left = (20 + Math.random() * 60) + '%';
    shootingStar.style.top = (5 + Math.random() * 40) + '%';
    shootingStar.style.setProperty('--shoot-duration', (4 + Math.random() * 3) + 's');
    shootingStar.style.animationDelay = (i * 10 + Math.random() * 12) + 's';

    universe.appendChild(shootingStar);
  }

  // Create floating particles
  for (let i = 0; i < config.particles; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.setProperty('--float-duration', (5 + Math.random() * 5) + 's');
    particle.style.animationDelay = Math.random() * 5 + 's';

    universe.appendChild(particle);
  }
})();
