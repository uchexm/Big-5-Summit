const menu = document.querySelector('#mobile-menu');
const menuItem = document.querySelector('.nav-mobile');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuItem.classList.toggle('active');
});

menuItem.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuItem.classList.toggle('active');
});

const countDownDate = new Date('Jan 5, 2024 15:37:25').getTime();

// Update the count down every 1 second
const x = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id='demo'
  document.getElementById('timer').innerHTML = `${days}d (${hours}h) (${
    minutes}m) ${seconds}s `;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);

const speakers = [
  {
    id: 'speaker1',
    img: {
      src: './images/Capture.PNG', alt: 'Picture of a professor',
    },
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entreprenuerial Legal Studies at Havard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book the wealth of networks in 2006',
  },
  {
    id: 'speaker1',
    img: {
      src: './images/1cap.PNG', alt: 'Picture of a professor',
    },
    name: 'SohYeong Noh',
    title: 'Berkman Professor of Entreprenuerial Legal Studies at Havard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book the wealth of networks in 2006',
  },
  {
    id: 'speaker1',
    img: {
      src: './images/2c.PNG', alt: 'Picture of a professor',
    },
    name: 'Lila Treklty',
    title: 'Berkman Professor of Entreprenuerial Legal Studies at Havard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book the wealth of networks in 2006',
  },
  {
    id: 'speaker1',
    img: {
      src: './images/3c.PNG', alt: 'Picture of a professor',
    },
    name: 'Kilnam Chon',
    title: 'Berkman Professor of Entreprenuerial Legal Studies at Havard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book the wealth of networks in 2006',
  },
  {
    id: 'speaker1',
    img: {
      src: './images/4c.PNG', alt: 'Picture of a professor',
    },
    name: 'Julia Leda',
    title: 'Berkman Professor of Entreprenuerial Legal Studies at Havard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book the wealth of networks in 2006',
  },
  {
    id: 'speaker1',
    img: {
      src: './images/5c.PNG', alt: 'Picture of a professor',
    },
    name: 'Ryan Merkley',
    title: 'Berkman Professor of Entreprenuerial Legal Studies at Havard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book the wealth of networks in 2006',
  },
];
function speakerCard(speakerObj) {
  const {
    id,
    img,
    name,
    title,
    description,
  } = speakerObj;
  const speakerDomNode = `
 <div id="${id}" class="speaker">
 <div class="imge">
   <img id="imge" src="${img.src}" alt="${img.alt}">
 </div>
 <div class="txt">
  <h4 class="names">${name}</h4>
  <p class="title">${title}</p>
  <span class="bard"></span>
  <p class="des">${description}</p>
 </div>
</div>
`;
  return speakerDomNode;
}
const speakerSection = document.querySelector('.speaker-container');
speakers.forEach((speaker) => {
  speakerSection.insertAdjacentHTML('afterbegin', speakerCard(speaker));
});