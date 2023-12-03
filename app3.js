//data set 
const movies = [
    {
    name:'Breaking Bad',
    description:"Breaking Bad is a critically acclaimed TV series that follows the transformation of a high school chemistry teacher, Walter White, into a ruthless drug lord. It's a gripping tale of crime, moral descent, and the consequences of one man's choices. With its complex characters and intense storytelling, Breaking Bad  is a modern classic.",
    image:'images/breaking.jpg',
    link:'https://hurawatch.art/series/breaking-bad-18349/1-1/'
    },
   { 
    name:'Spiderman Across The Spider Verse',
    description:"After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders. He must soon redefine what it means to be a hero so he can save the people he loves most.",
    image:'images/spiderman.jpeg',
    link:'https://hurawatch.art/movie/spider-man-across-the-spider-verse-04622/'
   },
   {
    name:'Wonka',
    description:"Focusing on a young Willy Wonka and how he came to meet the Oompa-Loompas on one of his earliest adventures",
    image:'images/wonka.png'
   },
   {
    name:'The Boys',
    description:"The Boys is a darkly comedic and irreverent series that explores a world where superheroes exist, but they're often corrupt and morally compromised. A group of vigilantes, known as The Boys, sets out to expose and take down these super-powered individuals who abuse their abilities and the fame that comes with them.",
    image:'images/boys.jpg',
    link:'https://hurawatch.art/series/the-boys-57425/1-1/'
   },
   {
    name:'Doctor Strange and the Multiverse of Madness',
    description:"Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse.",
    image:'images/doc.png',
    link:'https://hurawatch.art/movie/doctor-strange-in-the-multiverse-of-madness-26587/'
   },
   {
    name:'John Wick Chapter 4',
    description:"With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin.",
    image:'images/wick.webp',
    link:'https://hurawatch.art/movie/john-wick-chapter-4-10566/'
   },
   {
   name:'YOU',
   description:'What would you do for love? For Joe, an intense young man who frequently becomes smitten with beautiful, smart women, this question is put to the test. A charming yet awkward crush becomes something more sinister when love turns into obsession for Joe.',
   image:'images/you.jpg',
   link:'https://noxx.to/tv/you'
   },
   {
    name:'American Psycho',
    description:'American Psycho delves into the life of Patrick Bateman, a wealthy investment banker in New York City. However, behind his polished exterior, Bateman harbors a psychopathic alter ego. The film is a dark exploration of consumerism, identity, and violence in the materialistic world of the late 1980s.',
    image:'images/american.jpg',
    link:'https://hurawatch.art/movie/american-psycho-16269/'
    }
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
