// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Create running text effect for subtitle
  const createRunningText = () => {
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
      const originalText = subtitle.textContent;
      subtitle.innerHTML = '';

      // Create single running text element
      const runningText = document.createElement('span');
      runningText.textContent = originalText;
      runningText.className = 'running-text';

      subtitle.appendChild(runningText);
    }
  };

  createRunningText();
  // Add scroll animation for elements
  const scrollElements = document.querySelectorAll('.grid-img, .about-img, .trend-img, .roadmap-img, .exchange-logo, .tokenomics-img, .legal-img, .final-logo');

  // Add hover effects to buttons
  const buttons = document.querySelectorAll('.social-btn, .buy-btn, .contact-link');

  // Function to check if element is in view
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  };

  // Function to handle scroll animation
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add('animate');
      }
    });
  };

  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimation);

  // Initial check for elements in viewport
  handleScrollAnimation();

  // Add floating animation to hero image
  const heroImg = document.getElementById('hero-img');
  if (heroImg) {
    let floatUp = true;
    let position = 0;

    setInterval(() => {
      if (floatUp) {
        position += 0.2;
        if (position >= 10) floatUp = false;
      } else {
        position -= 0.2;
        if (position <= 0) floatUp = true;
      }

      heroImg.style.transform = `translateY(${position}px)`;
    }, 50);
  }

  // Add click effect to buy button
  const buyBtn = document.querySelector('.buy-btn');
  if (buyBtn) {
    buyBtn.addEventListener('click', function (e) {
      e.preventDefault();

      // Create ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      this.appendChild(ripple);

      // Position the ripple
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);

      // Show alert message
      setTimeout(() => {
        alert('Meow! Thanks for your interest in Coordination Cat!');
      }, 300);
    });
  }

  // Add random movement to some images on hover
  const animatedImages = document.querySelectorAll('.grid-img');
  animatedImages.forEach((img) => {
    img.addEventListener('mouseover', function () {
      const randomX = (Math.random() - 0.5) * 20;
      const randomY = (Math.random() - 0.5) * 20;
      const randomRotate = (Math.random() - 0.5) * 10;

      this.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
    });

    img.addEventListener('mouseout', function () {
      this.style.transform = 'translate(0, 0) rotate(0)';
    });
  });

  // Add typing effect to main title
  const mainTitle = document.querySelector('.main-title');
  if (mainTitle) {
    const text = mainTitle.textContent;
    mainTitle.textContent = '';

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        mainTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
  }

  // Add scroll to top button
  const createScrollTopButton = () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.classList.add('scroll-top-btn');
    scrollBtn.style.position = 'fixed';
    scrollBtn.style.bottom = '20px';
    scrollBtn.style.right = '20px';
    scrollBtn.style.width = '50px';
    scrollBtn.style.height = '50px';
    scrollBtn.style.borderRadius = '50%';
    scrollBtn.style.backgroundColor = '#ff6b6b';
    scrollBtn.style.color = '#fff';
    scrollBtn.style.border = 'none';
    scrollBtn.style.fontSize = '24px';
    scrollBtn.style.cursor = 'pointer';
    scrollBtn.style.display = 'none';
    scrollBtn.style.zIndex = '999';

    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    });
  };

  createScrollTopButton();

  // Create floating particles
  const createFloatingParticles = () => {
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('floating-particles');
    document.body.appendChild(particlesContainer);

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      // Random position
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = Math.random() * 3 + 3 + 's';

      particlesContainer.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 6000);
    };

    // Create particles continuously
    setInterval(createParticle, 300);
  };

  createFloatingParticles();

  // Initialize Particles.js for each section
  const initParticles = () => {
    const particleConfigs = {
      header: {
        particles: {
          number: { value: 50 },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
      },
      hero: {
        particles: {
          number: { value: 80 },
          color: { value: '#ff6b6b' },
          shape: { type: 'circle' },
          opacity: { value: 0.6 },
          size: { value: 4 },
          move: { enable: true, speed: 3 },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'bubble' },
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8 },
          },
        },
      },
      friends: {
        particles: {
          number: { value: 60 },
          color: { value: '#4ecdc4' },
          shape: { type: 'triangle' },
          opacity: { value: 0.4 },
          size: { value: 3 },
          move: { enable: true, speed: 2.5 },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
            push: { particles_nb: 3 },
          },
        },
      },
      about: {
        particles: {
          number: { value: 100 },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: { enable: true, speed: 1.5 },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'remove' },
            resize: true,
          },
          modes: {
            grab: { distance: 100, line_linked: { opacity: 0.5 } },
            remove: { particles_nb: 2 },
          },
        },
      },
      roadmap: {
        particles: {
          number: { value: 70 },
          color: { value: '#45b7d1' },
          shape: { type: 'star' },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'bubble' },
            onclick: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            bubble: { distance: 150, size: 6, duration: 2, opacity: 0.8 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
      },
      tokenomics: {
        particles: {
          number: { value: 90 },
          color: { value: '#96ceb4' },
          shape: { type: 'circle' },
          opacity: { value: 0.4 },
          size: { value: 3 },
          move: { enable: true, speed: 1.8 },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: { distance: 120, line_linked: { opacity: 0.7 } },
            push: { particles_nb: 5 },
          },
        },
      },
      contact: {
        particles: {
          number: { value: 60 },
          color: { value: '#ffeaa7' },
          shape: { type: 'triangle' },
          opacity: { value: 0.6 },
          size: { value: 4 },
          move: { enable: true, speed: 2.2 },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'bubble' },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            bubble: { distance: 180, size: 7, duration: 2, opacity: 0.9 },
          },
        },
      },
    };

    // Initialize particles for each section
    Object.keys(particleConfigs).forEach((section) => {
      const elementId = `particles-${section}`;
      const element = document.getElementById(elementId);
      if (element && window.particlesJS) {
        particlesJS(elementId, particleConfigs[section]);
      }
    });
  };

  // Initialize particles after a short delay to ensure library is loaded
  setTimeout(initParticles, 100);
});
