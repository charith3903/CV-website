// ============================================
// UNIVERSE BACKGROUND - DYNAMIC STARS & COMETS
// ============================================

(function() {
  // Create universe container
  const universe = document.createElement('div');
  universe.className = 'universe-bg';
  document.body.prepend(universe);

  // Configuration
  const config = {
    stars: 80,           // Number of stars
    comets: 2,           // Number of comets
    shootingStars: 3,    // Number of shooting stars
    particles: 20        // Number of floating particles
  };

  // Create stars
  for (let i = 0; i < config.stars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random size
    const sizes = ['small', 'medium', 'large'];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    star.classList.add(size);
    
    // Random color (mostly white, some colored)
    if (Math.random() > 0.85) {
      const colors = ['gold', 'teal', 'purple'];
      star.classList.add(colors[Math.floor(Math.random() * colors.length)]);
    }
    
    // Random position
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    
    // Random animation duration for variety
    star.style.setProperty('--duration', (2 + Math.random() * 4) + 's');
    star.style.animationDelay = Math.random() * 4 + 's';
    
    universe.appendChild(star);
  }

  // Create comets
  for (let i = 0; i < config.comets; i++) {
    const comet = document.createElement('div');
    comet.className = 'comet';
    
    // Random starting position (top area)
    comet.style.top = Math.random() * 30 + '%';
    comet.style.right = '-100px';
    
    // Random duration and delay
    comet.style.setProperty('--comet-duration', (8 + Math.random() * 7) + 's');
    comet.style.animationDelay = (i * 12 + Math.random() * 8) + 's';
    
    universe.appendChild(comet);
  }

  // Create shooting stars
  for (let i = 0; i < config.shootingStars; i++) {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    
    // Random position (upper half)
    shootingStar.style.left = (20 + Math.random() * 60) + '%';
    shootingStar.style.top = (5 + Math.random() * 40) + '%';
    
    // Random duration and delay
    shootingStar.style.setProperty('--shoot-duration', (3 + Math.random() * 4) + 's');
    shootingStar.style.animationDelay = (i * 8 + Math.random() * 10) + 's';
    
    universe.appendChild(shootingStar);
  }

  // Create floating particles
  for (let i = 0; i < config.particles; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random duration and delay
    particle.style.setProperty('--float-duration', (4 + Math.random() * 6) + 's');
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    universe.appendChild(particle);
  }

  console.log('🌌 Universe background initialized!');
})();
