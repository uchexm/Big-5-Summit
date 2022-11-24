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
  document.getElementById('timer').innerHTML = `${days}d ${hours}h ${
    minutes}m ${seconds}s `;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);

const speakerBody = document.querySelector('.speaker-container');
const speakerSection = document.createElement('div');
speakerSection.className = 'speakers-card';

const speakerProject = [];

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
    id: 'speaker2',
    img: {
      src: './images/1cap.PNG', alt: 'Picture of a professor',
    },
    name: 'SohYeong Noh',
    title: 'Berkman Professor of Entreprenuerial Legal Studies at Havard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book the wealth of networks in 2006',
  },
  {
    id: 'speaker3',
    img: {
      src: './images/2c.PNG', alt: 'Picture of a professor',
    },
    name: 'Lila Treklty',
    title: 'Berkman Professor of Entreprenuerial Legal Studies at Havard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book the wealth of networks in 2006',
  },
  {
    id: 'speaker4',
    img: {
      src: './images/3c.PNG', alt: 'Picture of a professor',
    },
    name: 'Kilnam Chon',
    title: 'Berkman Professor of Entreprenuerial Legal Studies at Havard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book the wealth of networks in 2006',
  },
  {
    id: 'speaker5',
    img: {
      src: './images/4c.PNG', alt: 'Picture of a professor',
    },
    name: 'Julia Leda',
    title: 'Berkman Professor of Entreprenuerial Legal Studies at Havard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book the wealth of networks in 2006',
  },
  {
    id: 'speaker6',
    img: {
      src: './images/5c.PNG', alt: 'Picture of a professor',
    },
    name: 'Ryan Merkley',
    title: 'Berkman Professor of Entreprenuerial Legal Studies at Havard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book the wealth of networks in 2006',
  },
];

const speakerArray = [];
speakers.forEach((item) => {
  const displaySpeaker = `<div class="imge"><img id="imge" src="${item.img.src}" alt="${item.name}"></div>
  <div class="txt">
      <div class="names">${item.name}</div>
      <div class="title">${item.title}</div>
      <span class="bard"></span>
      <div class="des">${item.description}</div>
  </div>`
  speakerArray.push(displaySpeaker);
})

for(let i = 0; i < speakers.length; i+= 1) {
   speakers[i].id = document.createElement('div');
   speakers[i].id.className = 'speaker-container';
   speakers[i].id.innerHTML = speakerArray[i];
   speakerBody.appendChild(speakers[i].id);
}
