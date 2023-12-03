//data set 
const movies = [
    {
    name: '13 Reasons Why',
    description:'"13 Reasons Why" is a high school drama series that unfolds a gripping narrative through cassette tapes left behind by a young girl who tragically took her own life, shedding light on the dark secrets and complex relationships that led to her decision.,',
    image: 'images/13.jpg',
    link:'https://hurawatch.art/series/13-reasons-why-81306/1-1/'
    },
    
    {
    name:'Breaking Bad',
    description:"Breaking Bad is a critically acclaimed TV series that follows the transformation of a high school chemistry teacher, Walter White, into a ruthless drug lord. It's a gripping tale of crime, moral descent, and the consequences of one man's choices. With its complex characters and intense storytelling, Breaking Bad  is a modern classic.",
    image:'images/breaking.jpg',
    link:'https://hurawatch.art/series/breaking-bad-18349/1-1/'
    },

   { 
    name:'Euphoria',
    description:'Euphoria delves into the lives of high school students as they navigate love, addiction, and identity in an intoxicating and visually stunning coming-of-age drama.',
    image:'images/eupho.jpg',
    link:'https://hurawatch.art/series/euphoria-76677/1-1/'
   },

   {
    name:'Peaky Blinders',
    description:"Peaky Blinders is a British crime drama that follows the Shelby crime family in the aftermath of World War I. Led by the cunning Tommy Shelby, they navigate the world of organized crime, politics, and power, making their mark in Birmingham through cunning strategies, razor-blade-studded caps, and a distinctive sense of style.",
    image:'images/peaky.jpg',
    link:'https://hurawatch.art/series/peaky-blinders-07941/1-1/'
   },

   {
    name:'The Boys',
    description:"The Boys is a darkly comedic and irreverent series that explores a world where superheroes exist, but they're often corrupt and morally compromised. A group of vigilantes, known as The Boys, sets out to expose and take down these super-powered individuals who abuse their abilities and the fame that comes with them.",
    image:'images/boys.jpg',
    link:'https://hurawatch.art/series/the-boys-57425/1-1/'
   },
   
   {
    name:'Rick and Morty',
    description:'Rick and Morty is an animated series that follows the chaotic adventures of an eccentric and alcoholic scientist, Rick Sanchez, and his good-hearted but easily influenced grandson, Morty Smith. They travel through alternate dimensions and galaxies, encountering bizarre creatures and tackling mind-bending sci-fi scenarios while exploring themes of family, existentialism, and absurdity.',
    image:'images/rick.jpg',
    link:'https://hurawatch.art/series/rick-and-morty-98189/1-1/'
   },
   
   {
    name:'Stranger Things',
    description:'Stranger Things is a thrilling series set in the 1980s that follows a group of kids as they encounter supernatural forces, secret government experiments, and the disappearance of one of their friends. They embark on a quest to find their missing friend, uncovering a parallel dimension known as the Upside Down and a mysterious girl with psychokinetic powers. The show blends nostalgia, horror, and a strong sense of camaraderie among its young protagonists.',
    image:'images/stranger things.jpg',
    link:'https://hurawatch.art/series/stranger-things-55226/1-1/'
   },
   {
    name:'Friends',
    description:"Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.",
    image:'images/friends.jpg',
    link:'https://hurawatch.art/series/friends-69053/1-1/'
   },
  ];

//slider script

const carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;
let intervalId;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }
    
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.src = movies[slideIndex].image;
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].description));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-name';
    p.className = 'movie-description';

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }

    slideIndex++;
    
    let watchNowButton = document.createElement('button');
    watchNowButton.className = 'watch-now-button';
    watchNowButton.appendChild(document.createTextNode('Watch Now'));
    watchNowButton.setAttribute('data-movie-index', slideIndex - 1); // Set the movie index as a data attribute
    watchNowButton.addEventListener('click', watchNow);

    content.appendChild(watchNowButton);
};

for (let i = 0; i < 3; i++) {
    createSlide();
}

intervalId = setInterval(() => {
    createSlide();
}, 3500);

function watchNow() {
    // Get the index of the clicked "Watch Now" button
    const buttonIndex = this.getAttribute('data-movie-index');

    // Get the link for the corresponding movie
    const link = movies[buttonIndex].link;

    // Redirect to the specified URL
    window.open(link,'_blank');
}

const watchNowButtons = document.querySelectorAll('.watch-now');

watchNowButtons.forEach(button => {
button.addEventListener('click', function () {
    const cardBody = this.closest('.card-body'); // Fin d the parent card-body
    const link = cardBody.getAttribute('data-link'); // Get the link from data-link attribute

    if (link) {
        window.open(link, '_blank'); // Open the link in a new tab
    }
});
});

// Add a hover event listener to pause and resume the interval
carousel.addEventListener('mouseenter', () => {
    clearInterval(intervalId); // Pause the interval when hovering
});

carousel.addEventListener('mouseleave', () => {
    // Resume the interval when the mouse leaves
    intervalId = setInterval(() => {
        createSlide();
    }, 3500);
});

//video card script
const videoCards = [...document.querySelector('.video-card-container').children];

videoCards.forEach(item => {
    item.addEventListener('mouseenter', () => {
        console.log('Mouse entered:', item); // Check if this message is logged
        let video = item.children[1];
        video.play();
    });

    item.addEventListener('mouseleave', () => {
        console.log('Mouse left:', item); // Check if this message is logged
        let video = item.children[1];
        video.pause();
    });
});


