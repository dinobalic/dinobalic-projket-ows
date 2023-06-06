/* skrolanje sekcija po sekcija */

const sections = document.querySelectorAll('.section');
let currentSectionIndex = 0;

function scrollToSection(sectionIndex) {
sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
currentSectionIndex = sectionIndex;
}

window.addEventListener('wheel', (event) => {
event.preventDefault();
const direction = event.deltaY > 0 ? 1 : -1;
scrollToSection(currentSectionIndex + direction);
});

const backToTopButton = document.getElementById('back-to-top');
backToTopButton.addEventListener('click', () => {
scrollToSection(0);
backToTopButton.style.display = 'none';
});

window.addEventListener('scroll', () => {
if (window.scrollY > 0) {
backToTopButton.style.display = 'block';
} else {
backToTopButton.style.display = 'none';
}
});

/* sidebar*/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.getElementById("openNav").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.getElementById("openNav").style.display = "block";
  }


/*galerija trg. lanci dark mode*/

const navLinks = document.querySelectorAll('b');
const images = document.querySelectorAll('.gallery img');

navLinks.forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();
const target = e.target.dataset.target;
images.forEach(image => {
image.classList.remove('dark');
if (!image.dataset.tags.includes(target)) {
image.classList.add('dark');
}
});
});
});


/*više projekata*/


var projects = [
  "Projekt 31",
  "Projekt 32",
  "Projekt 33",
  "Projekt 34",
  "Projekt 35",
  // Dodajte ostale projekte ovdje
];

function showMoreProjects() {
  var projectList = document.createElement('ul');
  projectList.classList.add('project-list'); // Dodajemo klasu za stiliziranje ul elementa
  
  for (var i = 0; i < projects.length; i++) {
    var project = document.createElement('li');
    project.textContent = projects[i];
    project.style.color = "white";
    project.style.fontSize = "2rem";
    projectList.appendChild(project);
  }
  
  var section7 = document.getElementById('section7');
  section7.appendChild(projectList);
  
  var showMoreButton = document.querySelector('.show-more-button');
  showMoreButton.style.display = 'none';
}

/*slideshow projekti gallery treba poraditi na ovom još 
to je kada se odabere jedna slika onda se stvara slideshow i može se dalje listati u prozoru koji se otvroi



// Dohvaćanje elemenata iz DOM-a
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
const nextButton = document.getElementById('nextButton');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');

let currentIndex = 0;

// Prikazivanje pojedinačne slike u lightboxu
function showImage(index) {
  const image = images[index];
  const imageUrl = image.src;
  const imageAlt = image.alt;

  lightboxImage.src = imageUrl;
  lightboxImage.alt = imageAlt;
  lightbox.style.display = 'block';
}

// Zatvaranje lightboxa
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Listanje slika na klik nextButtona
nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
});

// Prikazivanje pojedinačne slike na klik
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});

// Zatvaranje lightboxa na klik izvan slike
lightbox.addEventListener('click', closeLightbox);

*/