// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dropdown Menu Hover Effect
const dropdown = document.querySelector('.dropdown');
if (dropdown) {
  dropdown.addEventListener('mouseenter', () => {
    dropdown.querySelector('.dropdown-menu').style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdown.querySelector('.dropdown-menu').style.display = 'none';
  });
}

// Fade-In Animation for Sections on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(section => {
  section.classList.add('hidden'); // Initially hide sections
  observer.observe(section);
});

// Add Active Class to Navigation Links Based on Scroll Position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');

  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});

// Poster Carousel Functionality
const posters = document.querySelectorAll('.poster-carousel img');
let currentIndex = 0;

function showNextPoster() {
  posters.forEach((poster, index) => {
    poster.classList.remove('active');
  });

  posters[currentIndex].classList.add('active');
  currentIndex = (currentIndex + 1) % posters.length;
}

setInterval(showNextPoster, 5000);
showNextPoster();

// Multilingual Toggle
const langToggle = document.getElementById('lang-toggle');
let isAmharic = false;

langToggle.addEventListener('click', () => {
  isAmharic = !isAmharic;
  langToggle.textContent = isAmharic ? 'English' : 'Amharic';

  const translations = {
    en: {
      about: 'About Us',
      work: 'Our Work',
      programs: 'Our Programs',
      blog: 'Blog and Film Review',
      resources: 'External Resources',
      contact: 'Contact Us',
      testimonials: 'Testimonials',
      follow: 'Follow Us',
      feedback: 'Share Your Feedback',
    },
    am: {
      about: 'ስለእኛ',
      work: 'የእኛ ስራ',
      programs: 'የእኛ ፕሮግራሞች',
      blog: 'ብሎግ እና ፊልም ግምገማ',
      resources: 'ውጭ ምንጮች',
      contact: 'እኛን ያነጋግሩ',
      testimonials: 'ተማሪዎች አስተያየቶች',
      follow: 'እኛን ይከታተሉ',
      feedback: 'አስተያየትዎን ያካፍሉ',
    },
  };

  const elements = {
    about: document.querySelector('#about h2'),
    work: document.querySelector('#work h2'),
    programs: document.querySelector('#programs h2'),
    blog: document.querySelector('#blog h2'),
    resources: document.querySelector('#resources h2'),
    contact: document.querySelector('#contact h2'),
    testimonials: document.querySelector('#testimonials h2'),
    follow: document.querySelector('#follow h2'),
    feedback: document.querySelector('#feedback h2'),
  };

  Object.keys(elements).forEach(key => {
    elements[key].textContent = isAmharic ? translations.am[key] : translations.en[key];
  });
});