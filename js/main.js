const row = document.querySelector('.container-carousel');
const movies = document.querySelectorAll('.movie');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

/* Event listener for right Arrow */
rightArrow.addEventListener('click', () => {
    row.scrollLeft += row.offsetWidth;

    const indicatorsActive = document.querySelector('.indicators');
    if(indicatorsActive.nextSibling){
        indicatorsActive.nextSibling.classList.add('.active');
        indicatorsActive.classList.remove('active');
    }
});

/* Event listener for left Arrow */
leftArrow.addEventListener('click', () => {
    row.scrollLeft -= row.offsetWidth;

const indicatorsActive = document.querySelector('.indicators');
    if(indicatorsActive.nextSibling){
        indicatorsActive.nextSibling.classList.add('.active');
        indicatorsActive.classList.remove('active');
    }
});

/* Page */
const numberPages = Math.ceil(movies.length / 5);
for(let i = 0; i < numberPages; i++){
    const indicators = document.createElement('button');

    if(i === 0){
        indicators.classList.add('.active');
    }

    document.querySelector('.indicators').appendChild(indicators);
    indicators.addEventListener('click', (e) => {
        row.scrollLeft = i * row.offsetWidth;

        document.querySelector('.indicators').classList.remove('active');
        e.target.classList.add('.active');
    });
}