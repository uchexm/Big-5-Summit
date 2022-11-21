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


var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);





function creation(m = 'div') {
  if(!m) {
    m= 'div';
  }
  return document.createElement(m);
}

const projectData = [
  {
    id: 'project1',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Enterprenuerial Legal Studies at Havard Law',
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageUrl: './images/portfolio-1.png',
  },
  {
    id: 'project2',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Enterprenuerial Legal Studies at Havard Law',
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageUrl: './images/portfolio-1.png',
  },
  {
    id: 'project3',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Enterprenuerial Legal Studies at Havard Law',
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageUrl: './images/portfolio-1.png',
  },
  {
    id: 'project4',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Enterprenuerial Legal Studies at Havard Law',
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageUrl: './images/portfolio-1.png',
  },
  {
    id: 'project5',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Enterprenuerial Legal Studies at Havard Law',
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageUrl: './images/portfolio-1.png',
  },
  {
    id: 'project6',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Enterprenuerial Legal Studies at Havard Law',
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageUrl: './images/portfolio-1.png',
  },
]; // End of portfolio data


function fetchProject(id) {
  const projects = projectData;

  let project;
  for(let i = 0; i <projectData.length; i++) {
    if(projects[i].id === id) {
      project = projects[i];
    }
  }
  if(project) {
    const
  }




}