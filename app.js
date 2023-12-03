//data set 
const movies = [
    {
    name: 'The Batman',
    description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis.",
    image: 'images/batman.jpg',
    link:'https://hurawatch.art/movie/the-batman-68568/'
    },
    
    {
    name:'Oppenheimer',
    description:"During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
    image:'images/oppen.jpeg',
    link:'https://hurawatch.art/movie/oppenheimer-51311/'
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
    name:'Barbie',
    description:"Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    image:'images/barb.jpg',
    link:'https://hurawatch.art/movie/barbie-22867/'
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

