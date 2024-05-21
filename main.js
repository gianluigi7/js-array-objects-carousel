'use strict'

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let currentPosition = 0;
const items = document.querySelector('.items');
const title = document.querySelector('.content h2');
const didascalia = document.querySelector('.content p');
createElements();
content();

const allItems = document.querySelectorAll('.item');

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');


function createElements() {
    images.forEach((element, index, array) => {
        console.log(element);
      
        const div = document.createElement('div');
        div.className = 'item';
      
        if(index === currentPosition) {
          div.classList.add('active');
        }
      
        const image = document.createElement('img');
        image.src = element.image;
        image.alt = element.title;
      
        div.append(image);
        items.append(div);
      });
}

  
   prevButton.addEventListener('click', function() {

       allItems[currentPosition].classList.remove('active');
     if (currentPosition > 0) {
         currentPosition--;
    } else { 
        currentPosition = allItems.lenght - 1
    }
    content();
    allItems[currentPosition].classList.add('active');
    
   });
   nextButton.addEventListener('click', function() {
    
       allItems[currentPosition].classList.remove('active');
    if (currentPosition < allItems.lenght - 1) {
        currentPosition++;
    } else {
        currentPosition = 0;
    }
    content();
    allItems[currentPosition].classList.add('active');

     
   });

   function content() {
    title.innerText = images[currentPosition].title;
    didascalia.innerText = images[currentPosition].text;
   }